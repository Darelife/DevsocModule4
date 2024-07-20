var x = 2;
function HomePosts() {
  return (
    <div className="w-full flex mt-8 space-x-4">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        {x%2 ? <img src="https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format" alt="" className="" /> : <img src="https://instructor-academy.onlinecoursehost.com/content/images/2023/05/31_How-to-Create-a-Programming-Course_.jpg" alt="" className="" />}
      </div>
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2xl text-gray-300">
          My first post
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-300 space-x-4 md:mb-4 items-center justify-between">
          <p>Darelifeeee</p>
          <div className="flex space-x-2">
            <p>16/6/24</p>
            <p>16:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg text-gray-300">Post description</p>
      </div>
    </div>
  )
}

export default HomePosts
