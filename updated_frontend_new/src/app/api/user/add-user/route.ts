import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
const BASE_URL =process.env.NEXT_BACKEND_API_URL;
const USER_API_PATH = "user";
export const dynamic = "force-dynamic";

const POST = async (req: Request) => {
  try {
    noStore();
    let userDetails: any = await req.json();
    const response = await axios.post(`${BASE_URL}/${USER_API_PATH}/add-user`, {
      userName: userDetails.userName,
      email: userDetails.email,
      password: userDetails.password,
    });
    return Response.json(response.data, {
      status: response.status,
    });
  } catch (err: any) {
    return new Response(err?.response?.data?.message ?? "Something went wrong", {
      status: err?.response?.status ?? 500,
    });
  }
};

export { POST };
