import { useNavigate } from "react-router";

export default function ServerErrorBlock() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-3xl font-bold text-base-content">
        Server issues [500]
      </h1>
      <button onClick={() => navigate(0)} className="btn btn-primary btn-md">
        Try Again
      </button>
    </div>
  );
}
