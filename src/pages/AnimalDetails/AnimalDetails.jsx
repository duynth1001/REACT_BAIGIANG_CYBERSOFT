import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const AnimalDetails = () => {
  const { id } = useParams();
  console.log("params", id);
  // useEffect(()=> , [id])

  useEffect(() => {
    //Callback sẽ chạy lại khi id thay đổi
    // call api
    const getAnimalById = async () => {
      try {
        const response = await axios({
          url: `https://6534da22e1b6f4c59046fb97.mockapi.io/animal/${id}`,
          method: "GET",
        });
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      getAnimalById();
    }
  }, [id]);

  return <div>AnimalDetails</div>;
};

export default AnimalDetails;
