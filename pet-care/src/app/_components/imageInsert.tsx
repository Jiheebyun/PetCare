import Image from "next/image";

export default function ImageInsert(props: any) {
  return (
    <div>
      <Image src={props.image} alt={props.title} width={80} height={80} />
      <div>title : {props.title}</div>
      <div>description : {props.description}</div>
    </div>
  );
}
