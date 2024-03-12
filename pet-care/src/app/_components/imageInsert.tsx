import Image from "next/image";


export default function ImageInsert(props: any) {
  return (
    <div>
      <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
    </div>
  );
}
