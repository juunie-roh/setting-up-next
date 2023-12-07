import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="about Juun"
        description="description about this page, explain packages & techs used."
      />
    }
  >
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
      delectus dolore inventore repellendus suscipit maiores veritatis
      doloribus, architecto deleniti error ratione libero vero autem est
      temporibus fugiat sunt ut eos.
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dolores quos
      voluptatibus tenetur cumque, unde porro quaerat veritatis similique
      possimus cupiditate. Doloribus expedita iure qui delectus dolorem optio
      magni repellendus?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor
      nostrum fuga et. Aliquid, vitae totam. Ad eligendi voluptatem debitis
      atque fuga! Molestiae, sequi eos natus ex necessitatibus corrupti ratione.
    </p>
  </Main>
);

export default About;
