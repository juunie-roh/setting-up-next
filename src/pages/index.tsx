import { DefaultSection, Meta } from '@/layouts';
import { antonio } from '@/styles/fonts';
import { Main } from '@/templates';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Juun"
        description="Personal web site Based on NextJS Boilerplate by ixaan"
      />
    }
  >
    <DefaultSection>
      <h2
        className={`${antonio.className} text-10xl font-bold text-gray-900 dark:text-gray-100`}
      >
        Juun
      </h2>
    </DefaultSection>
    <DefaultSection>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        delectus dolore inventore repellendus suscipit maiores veritatis
        doloribus, architecto deleniti error ratione libero vero autem est
        temporibus fugiat sunt ut eos.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dolores
        quos voluptatibus tenetur cumque, unde porro quaerat veritatis similique
        possimus cupiditate. Doloribus expedita iure qui delectus dolorem optio
        magni repellendus?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor
        nostrum fuga et. Aliquid, vitae totam. Ad eligendi voluptatem debitis
        atque fuga! Molestiae, sequi eos natus ex necessitatibus corrupti
        ratione.
      </p>
    </DefaultSection>
  </Main>
);

export default Index;
