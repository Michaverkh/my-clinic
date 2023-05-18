import { cast, flow, types } from "mobx-state-tree";
import { EEndpoints } from "shared/api/enums";
import { apiModule } from "index";
import { IUserRequestDto, IUserResponseDto } from "./dto";
import { userMapper } from "./mappers";

const Geo = types.model("Geo", {
  lat: types.optional(types.string, ""),
  lng: types.optional(types.string, ""),
});

const Address = types.model("Address", {
  street: types.optional(types.string, ""),
  suite: types.optional(types.string, ""),
  city: types.optional(types.string, ""),
  zipcode: types.optional(types.string, ""),
  geo: types.optional(Geo, {}),
});

const Company = types.model("Company", {
  name: types.optional(types.string, ""),
  catchPhrase: types.optional(types.string, ""),
  bs: types.optional(types.string, ""),
});

const User = types.model("User", {
  id: types.optional(types.number, 0),
  name: types.optional(types.string, ""),
  username: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  phone: types.optional(types.string, ""),
  website: types.optional(types.string, ""),
  address: types.optional(Address, {}),
  company: types.optional(Company, {}),
});

const UserStore = types
  .model("UserStore", {
    loading: types.boolean,
    user: types.optional(User, {}),
  })
  .actions((self) => ({
    getUserData: flow(function* () {
      self.loading = true;
      try {
        const res = yield apiModule.getData<IUserRequestDto, IUserResponseDto>(
          `${EEndpoints.GET_USER}`,
          {},
          {}
        );
        self.user = yield userMapper(res);
      } finally {
        self.loading = false;
      }
    }),
    login: flow(function* () {
      self.loading = true;
      try {
        const res = yield apiModule.postData<{}, {}>(EEndpoints.LOGIN, {}, {});
      } finally {
        self.loading = false;
      }
    }),
  }));

export { UserStore };
