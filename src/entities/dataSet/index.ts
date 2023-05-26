import { flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";
import { apiModule } from "index";

const DataSetStore = types
  .model("DataSet", {
    loading: types.boolean,
    isSuccess: types.boolean,
  })
  .actions((self) => ({
    sendFile: flow(function* (formData: FormData) {
      self.loading = true;
      self.isSuccess = false;
      try {
        const res = yield apiModule.postData(
          `${EEndpoints.POST_UPLOAD_DATASET}`,
          { formData },
          {}
        );
        self.isSuccess = res.status ? !!res.status : false;
      } finally {
        self.loading = false;
      }
    }),
  }));

export { DataSetStore };
