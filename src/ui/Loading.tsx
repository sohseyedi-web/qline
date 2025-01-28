const Loading = ({ status = false }: { status?: boolean }) => {
  return status ? (
    <div className="flex items-center justify-center">
      <span className="loading loading-bars loading-lg text-blue-100"></span>
    </div>
  ) : (
    <span className="loading loading-infinity loading-md"></span>
  );
};

export default Loading;
