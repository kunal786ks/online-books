import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
const USER_API_PATH = "user";
const BASE_URL = `${process.env.NEXT_BACKEND_API_URL}`;
export const dynamic = "force-dynamic"; // defaults to auto

const PUT = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    noStore();
    let sessionDetails:updateProfileInterface = await req.json();
    const response = await axios.put(
      `${BASE_URL}/${USER_API_PATH}/upload-image/${params.id}`,
      {
        image:sessionDetails.image
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

export { PUT };
