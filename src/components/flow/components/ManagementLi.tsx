import Link from 'next/link';

type IItem = {
  title: string;
  href: string;
};

export default function MngmtLi(props: { item: IItem }) {
  const { href, title } = props.item;
  return (
    <li>
      <Link href={href}>
        <i />
        <span>{title}</span>
      </Link>
    </li>
  );
}
