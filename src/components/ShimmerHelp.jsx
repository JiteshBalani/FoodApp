import Skeleton from 'react-loading-skeleton'

const ShimmerHelp = () => {
  return (
    <div>
      <div className="px-[200px] py-[50px] space-y-5 space-x-1">
        <div className="text-lg space-y-2">
          <div>
              <Skeleton width={50} />
            /Help
          </div>
          <h1 className="text-3xl font-extrabold rounded-lg text-[#F05455]">
            <Skeleton width={300} />
          </h1>
          <p className="text-left text-xl font-semibold pt-[20px]">
            <Skeleton count={3} />
          </p>

          <div className="px-[100px] pt-[50px] space-y-10">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[#F05455]">
                <Skeleton width={200} />
              </h2>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  <Skeleton width={200} />
                </h3>
                <ul className="list-disc ml-10">
                  <li><Skeleton width={250} /></li>
                  <li><Skeleton width={250} /></li>
                  <li><Skeleton width={250} /></li>
                  <li><Skeleton width={250} /></li>
                </ul>
              </div>
            </section>

            {/* Repeat similar structure for other sections */}
          </div>

          <p className="text-[#F05455] text-2xl font-semibold pt-[50px]">
            <Skeleton width={400} />
          </p>
        </div>
      </div>
    </div>
  );
};
  


export default ShimmerHelp