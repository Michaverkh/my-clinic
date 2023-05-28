import { baseUrl } from "index";
import { flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";
import { EDowloadingState } from "shared/enums/enums";

const link = document.createElement("a");
window.document.body.appendChild(link);

const ReportStore = types
  .model("ReportStore", {
    state: types.string,
  })
  .actions((self) => ({
    getReport: flow(function* (fileName: string) {
      self.state = EDowloadingState.Loading;
      try {
        const response = yield fetch(
          `${baseUrl}${EEndpoints.GET_REPORT_EXPORT_FILE}`,
          {}
        );
        if (self.state === EDowloadingState.Canceled) {
          self.state = EDowloadingState.Nop;
          return;
        }
        if (response.status === 200) {
          const blob = yield response.blob();
          const downloadUrl = window.URL.createObjectURL(blob);
          link.href = downloadUrl;
          link.download = `${fileName}.xlsx`;
          self.state = EDowloadingState.Loaded;
        }
      } catch {
        self.state = EDowloadingState.Error;
      }
    }),
    handleDownloadReportClick: () => {
      link.click();
      self.state = EDowloadingState.Nop;
    },
    handleClose: () => {
      self.state = EDowloadingState.Nop;
    },
    cancelDownload: () => {
      self.state = EDowloadingState.Canceled;
    },
  }));

export { ReportStore };
