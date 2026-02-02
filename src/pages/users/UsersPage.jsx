import SearchField from "../../components/ui/SearchField";
import { useGetUsersQuery } from "../../services/userApi";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery({
    page: 1,
    search: "",
    isVerified: true,
    isSuspended: false,
  });

  console.log("all users >>> ", data);
  return (
    <section className="w-full relative min-h-screen">
      <div className="w-full flex items-center justify-between gap-3 flex-wrap">
        <h2 className="page-title">Users</h2>
        <SearchField />
      </div>

      <UsersTable users={data} />
    </section>
  );
};

export default UsersPage;
