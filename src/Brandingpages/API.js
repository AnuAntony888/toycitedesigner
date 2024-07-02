import axios from "axios";
import { useQuery, useInfiniteQuery, useMutation } from "react-query";


const API = "https://admin.toycity.me/api/v1";
export function useVahaForm() {
    const VahaForm = async (formData) => {
      const res = await axios.post(`${API}/contactus`, formData, {
        method: "POST",
  
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // console.log(res, "response of profile");
      return res.data.data;
    };
  
    const {
      mutateAsync: vahaforms,
      isLoading: isVahaFormLodaing,
      error: isVahaFormrror,
    } = useMutation(VahaForm, {
      onSuccess: (data) => {},
      onError: (error) => {
        throw new Error(error.message);
      },
    });
    return { vahaforms, isVahaFormLodaing, isVahaFormrror };
  }