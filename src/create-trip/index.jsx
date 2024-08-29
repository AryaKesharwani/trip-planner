import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [place,setPlace]=useState()
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-grey-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">What is the destination of choice?</h2>
          <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
          selectProps={
            {
              place,
              onChange:(v)=> setPlace(v),
              placeholder:"Enter your destination",
              styles:{
                container:(provided)=>({
                  ...provided,
                  width:"100%"
                }),
                control:(provided)=>({
                  ...provided,
                  border:"1px solid #e5e7eb",
                  borderRadius:"5px",
                  padding:"0.5rem",
                  width:"100%"
                })
              }
            }
          }
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
