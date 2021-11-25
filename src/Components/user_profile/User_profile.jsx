import "./user_profile.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const User_profile = () => {
  const [user, setuser] = useState({
    image: "",
    first_name: "",
    last_name: "",
    address: {
      address: "",
      city: "",
    },
    birth_date: "",
    company: {
      name: "",
      title: "",
    },
    email: "",
    gender: "",
    university: "",
    username: "",
    website: "",
    age: "",
    dept: "",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit Ratione labore dolore praesentium, maxime incidunt id abcorporis quibusdam fugiat veniam accusamus pariatur aperiam,excepturi perspiciatis. Assumenda officiis culpa illovoluptatem!",
  });
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users/90")
      .then((res) => {
        setuser({
          ...user,
          image: res.data.image,
          first_name: res.data.firstName,
          last_name: res.data.lastName,
          address: {
            address: res.data.address.address,
            city: res.data.address.city,
          },
          birth_date: res.data.birthDate,
          company: {
            name: res.data.company.name,
            title: res.data.company.title,
          },
          email: res.data.email,
          gender: res.data.gender,
          university: res.data.university,
          username: res.data.username,
          website: res.data.domain,
          age: res.data.age,
          phone: res.data.phone,
          dept: res.data.company.department,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="user__profile">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-12">
              <div class="card p-3 py-4">
                <div class="text-center">
                  <img src={user.image} width="100" class="rounded-circle" />
                </div>
                <div class="text-center mt-3">
                  <span class="bg-secondary p-1 px-4 rounded text-white">
                    @{user.username}
                  </span>
                  <span class="bg-secondary p-1 px-4 rounded text-white mx-2">
                    {user.gender}
                  </span>
                  <h5 class="mt-2 mb-0 fs-1">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p class="mt-2 mb-0">
                    Studied at {user.university} , {user.dept} Departement
                  </p>
                  <p class="mt-2 mb-0"> {user.website}</p>
                  <span className="fs-5">
                    {user.company.title} at {user.company.name}
                  </span>
                  <div class="px-4 mt-1">
                    <p class="fonts w-75 text-center mx-auto fs-6 fw-light text-muted">
                      {user.bio}
                    </p>
                    <div className="contact_info row">
                      <h5 class="col-md-6">
                        Birthday / <span>{user.birth_date}</span>
                      </h5>
                      <h5 class="col-md-6">
                        Age / <span>{user.age}</span>{" "}
                      </h5>
                      <h5 class="col-md-6">
                        Email / <span>{user.email}</span>
                      </h5>
                      <h5 class="col-md-6">
                        Residence / <span>{user.address.city}</span>
                      </h5>
                      <h5 class="col-md-6">
                        Phone / <span>{user.phone}</span>
                      </h5>
                      <h5 class="col-md-6">
                        Adress / <span>{user.address.address}</span>
                      </h5>
                    </div>
                  </div>
                  {/* <div class="buttons">
                <button class="btn btn-outline-primary px-4">Message</button>
                <button class="btn btn-primary px-4 ms-3">Contact</button>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_profile;
