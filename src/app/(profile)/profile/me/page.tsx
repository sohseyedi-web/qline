import UserDataForm from "../../_/components/UserDataForm";

export default function Me() {
  return (
    <section className="p-3 mt-12">
      <header className="flex items-center justify-between">
        <h5 className="text-xl font-semibold ">اطلاعات کاربری</h5>
      </header>
      <hr className="mb-4 mt-1 border-[#e6e7ee]" />
      <UserDataForm />
    </section>
  );
}
