
import React from "react";
import aditi from "../assets/images/aditi.jpg";
import Sidebar from "../components/sidebar";

function Profile() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="flex justify-center w-full">
          <div className="profile border-2 px-40 py-10 w-[960px]">
            <div>
              <div className="upper flex gap-x-6    ">
                <div className="photo">
                  <img src={aditi} className="md:h-40 h-20 w-40 rounded-full" />
                </div>
                <div className="my-4 flex gap-x-6 justify-center">
                  <div className="username">
                    <h1 className="text-2xl">username</h1>
                  </div>
                  <div className="editprofile">
                    <button
                      type="submit"
                      className="bg-slate-200 w-40 h-8 rounded-lg font-semibold"
                    >
                      Edit profile
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 my-4 font-semibold">
                <div>
                  <h1>12 posts</h1>
                </div>
                <div>
                  <h1>259 followers</h1>
                </div>
                <div>
                  <h1>190 following</h1>
                </div>
              </div>
              <div className="">
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam explicabo accusamus consectetur natus ab quae
                  reiciendis nobis illum culpa sint ad voluptates voluptas
                  inventore itaque tempore, maxime, quis magni fugiat?
                </h1>
              </div>
            </div>
            <div className="highlights space-x-10 flex">
              <div className="w-[100px] my-10">
                <img
                  src={aditi}
                  className="h-[100px] w-[100px] rounded-full"
                  alt=""
                />
                <p className="text-center my-2">Highlights</p>
              </div>
              <div className="w-[100px] my-10">
                <img
                  src={aditi}
                  className="h-[100px] w-[100px] rounded-full"
                  alt=""
                />
                <p className="text-center my-2">Highlights</p>
              </div>
              <div className="w-[100px] my-10">
                <img
                  src={aditi}
                  className="h-[100px] w-[100px] rounded-full"
                  alt=""
                />
                <p className="text-center my-2">Highlights</p>
              </div>
            </div>
            <hr />
            <div className="header">
              <h1 className="text-center font-semibold">Posts</h1>
            </div>
            <div className="main">
              <div className="card flex gap-x-3 flex-wrap my-7">
                <div className="img">
                  <img src={aditi} className="md:w-[200px] w-[130px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="md:w-[200px] w-[130px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="md:w-[200px] w-[130px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="md:w-[200px] w-[130px]" alt="" />
                </div>
                <div className="img">
                  <img src={aditi} className="md:w-[200px] w-[130px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
