import common from '../common.module.css';
import { MngmtLi } from '../components';
import styles from './management.module.css';

const items = [
  {
    id: 0,
    title: '프로젝트',
    href: '/project',
  },
  {
    id: 1,
    title: '작업관리',
    href: '/task',
  },
  {
    id: 2,
    title: '간트차트',
    href: '/okr', // #link-task-wbs
  },
  {
    id: 3,
    title: 'OKR',
    href: '/okr',
  },
  {
    id: 4,
    title: '메신저',
    href: '/chatting',
  },
  {
    id: 5,
    title: '화상회의',
    href: '/video',
  },
  {
    id: 6,
    title: '파일함',
    href: '/project', // #link-prj-file
  },
  {
    id: 7,
    title: '캘린더',
    href: '/project', // #link-prj-cal
  },
  {
    id: 8,
    title: '외부인 초대',
    href: '/project', // #link-prj-invite
  },
];

export default function Management() {
  return (
    <section className={styles.container}>
      <div className={common.inner}>
        <h2 className={common.title}>
          프로젝트 관리를 위한
          <br />
          모든 기능을 담았습니다.
        </h2>
      </div>
      <div className={styles.flowWrap}>
        <ul>
          {items.map((item) => (
            <MngmtLi key={item.id} item={item} />
          ))}
          {items.map((item) => (
            <MngmtLi key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
