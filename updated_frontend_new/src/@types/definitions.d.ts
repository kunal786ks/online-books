interface ModalState {
  isOpen: boolean;
  reason: string;
  severity: AlertColor | undefined;
}

interface errorResponseInterface {
  statusCode?: number;
  message?: any;
}

interface updateProfileInterface{
  userId:string;
  image:any;
}
interface addUserInterface{
  userName:string,
  email:string,
  password:string
}
interface getUserInterface{
  email:string,
  password:string
}
interface userInterfcae{
    id:string,
    userName:string,
    email:string,
    user_img?:string
}

interface userIntialInterface{
    user:userInterfcae,
    token:string,
    userImage:string
    loading:boolean,
    error:any,
}
interface menuItemInterface {
  label: string;
  icon: any;
  path: string;
}
interface contentInterface {
  label: string;
}
interface popularInterface {
  src: string;
  title: string;
  author: string;
}
interface topRatedInterface {
  src: string;
  title: string;
  author: string;
  rating: number;
}
interface discoverItemInterface {
  label: string;
  bg_img: string;
  total: number;
  text_color: string;
}

interface discoverMenuInterface {
  label: string;
}
