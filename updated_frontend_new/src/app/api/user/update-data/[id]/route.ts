import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
const USER_API_PATH = "user";
const BASE_URL = `${process.env.NEXT_BACKEND_API_URL}`;
export const dynamic = "force-dynamic"

export const PUT = async (
    req: Request,
    { params }: { params: { id: string } }
  ) => {
    noStore();
    try {
      let updateDetails:updateInterface = await req.json();
      const response = await axios.put(
        `${BASE_URL}/${USER_API_PATH}/update-data/${params.id}`,{
            phone:updateDetails.phone,
            address:updateDetails.address,
            website:updateDetails.website,
        }
      );
      return Response.json(response.data, {
        status: response.status,
      });
    } catch (err: any) {
      return new Response(err?.message ?? "Something went wrong", {
        status: err?.response?.status ?? 500,
      });
    }
  };