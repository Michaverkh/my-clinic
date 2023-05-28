import { baseUrl } from "index";
import { flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";

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
        // Через apiModule файл не загружается
        // to do: сделать через apiModule

        const res = yield fetch(`${baseUrl}${EEndpoints.POST_UPLOAD_DATASET}`, {
          method: "POST",
          body: formData,
        });

        const result = yield res.json();

        self.isSuccess = result.isSuccess ? true : false;
      } finally {
        self.loading = false;
      }
    }),
  }));

export { DataSetStore };
