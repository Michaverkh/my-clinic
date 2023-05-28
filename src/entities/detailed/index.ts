import { flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";
import { apiModule } from "index";
import { IDetailedRequestDto, IDetailedResponseDto } from "./dto";
import { detailedMapper } from "./mappers";
import { detailedRequestSchema, detailedResponseSchema } from "./validators";

const Reception = types.model("Reception", {
  date: types.optional(types.string, ""),
  id: types.optional(types.string, ""),
  diagnosis: types.optional(types.string, ""),
  //Статус приема – возможные значения см таблицу 1
  status: types.optional(types.string, ""),
});

const Doctor = types.model("Doctor", {
  specialization: types.optional(types.string, ""),
  name: types.optional(types.string, ""),
  id: types.optional(types.string, ""),
});

const Research = types.model("Appointment", {
  id: types.optional(types.number, 0),
  name: types.optional(types.string, ""),
  isNecessary: types.optional(types.boolean, false),
  status: types.optional(types.string, ""),
});

const Item = types.model("Item", {
  reception: types.optional(Reception, {}),
  doctor: types.optional(Doctor, {}),
  research: types.array(Research),
});

const DetailedStore = types
  .model("Detailed", {
    loading: types.boolean,
    item: types.optional(Item, {}),
    isSuccess: types.boolean,
  })
  .actions((self) => ({
    getInfo: flow(function* (id: number) {
      self.loading = true;
      try {
        const res = yield apiModule.getData<
          IDetailedRequestDto,
          IDetailedResponseDto
        >(
          `${EEndpoints.GET_DETAILED_INFO}/${id}`,
          {},
          {
            requestValidationSchema: detailedRequestSchema,
            responseValidationSchema: detailedResponseSchema,
          }
        );

        self.item = yield detailedMapper(res);
        if (!res) {
          self.isSuccess = false;
        }
      } finally {
        self.loading = false;
      }
    }),
  }));

export { DetailedStore };
