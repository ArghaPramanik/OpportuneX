import { BarLoader } from "react-spinners";
import JobCard from "./job-card";
import { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";
import { getMyJobs } from "@/api/apiJobs";
import { useUser } from "@clerk/clerk-react";

const CreatedJobs = () => {
  const { user } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });

  useEffect(() => {
    fnCreatedJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingCreatedJobs) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {createdJobs?.length ? (
        createdJobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
              onJobSaved={fnCreatedJobs}
              isMyJob
            />
          );
        })
      ) : (
        <div>No jobs found</div>
      )}
    </div>
  );
};

export default CreatedJobs;
