import { flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";
import { apiModule } from "index";
import { IReceptionsRequestDto, IReceptionsResponseDto } from "./dto";
import { paginationMapper, receptionsItemsMapper } from "./mappers";
import {
  receptionsRequestSchema,
  receptionsResponseSchema,
} from "./validators";

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

const Appointment = types.model("Appointment", {
  //Массив строк со статусами Статус – см таблицу 2
  research: types.optional(types.array(types.string), []),
  count: types.optional(types.number, 0),
});

const Pagination = types.model("Pagination", {
  limit: types.optional(types.number, 10),
  offset: types.optional(types.number, 0),
  totalSize: types.optional(types.number, 0),
});

const ReceptionItem = types.model("ReceptionItem", {
  reception: Reception,
  doctor: Doctor,
  appointment: Appointment,
});

const ReceptionsStore = types
  .model("Receptions", {
    loading: types.boolean,
    sortDirection: types.string,
    items: types.array(ReceptionItem),
    pagination: types.optional(Pagination, {}),
  })
  .views((self) => ({
    get page() {
      return self.pagination.offset / self.pagination.limit;
    },
  }))
  .actions((self) => ({
    setOrder: (order: string) => {
      self.sortDirection = order;
    },
    setPage: (page: number) => {
      self.pagination.offset = self.pagination.limit * page;
    },
    setLimit: (limit: number) => {
      self.pagination.limit = limit;
    },
    getList: flow(function* () {
      self.loading = true;
      try {
        const res = yield apiModule.getData<
          IReceptionsRequestDto,
          IReceptionsResponseDto
        >(
          `${EEndpoints.GET_RECEPTIONS_LIST}`,
          {
            limit: self.pagination.limit,
            offset: self.pagination.offset,
            sortDirection: self.sortDirection,
          },
          {
            requestValidationSchema: receptionsRequestSchema,
            responseValidationSchema: receptionsResponseSchema,
          }
        );
        self.items = yield receptionsItemsMapper(res);
        self.pagination = yield paginationMapper(res);
      } finally {
        self.loading = false;
      }
    }),
  }));

export { ReceptionsStore };
