
const ImageComponent = ({alt,width,src,height}:{alt:string,width:string,src:string,height:string}) => {
  return (
    <>
    <img  alt={alt} src={src} height={height} width={width} style={{borderRadius:"12px"}}/>
    </>
  )
}

export default ImageComponent
