<template>
  <section class="content">
    <section class="section-row">
      <section id="about-me" class="section-col">
        <p class="description">
          I'm <strong>{{ $config.appAuthor }}</strong
          >, a <strong>Design Technologist & DesignOps</strong> from Brazil.
        </p>
        <p class="description">
          I work across multiple product design areas, such as interaction,
          motion, UX, and UI, with
          <strong> more than {{ workyears }} years of experience </strong>
          in the field, in companies in Netherlands, US and Brazil.
        </p>
        <p class="description">
          My core competencies include designing and developing digital
          products, using React/Nuxt/Vue, that meet the needs and expectations
          of users and clients. I also specialize in bridging the gap between
          designers and developers, creating a better design/developer
          experience (DX) and implementing DesignOps and GitOps practices.
          <br /><br />

          I am passionate about leveraging design and technology to create
          positive social impact and improve people's lives.
        </p>
      </section>
      <section id="skills" class="section-col">
        <h1>Quick Facts</h1>
        <listItem
          :items-col-left="[
            {
              name: 'Collaborated within High-Performance Teams to drive successful project outcomes',
            },
            {
              name: 'Demonstrated proficiency in working with remote and multi-cultural teams over the past 10+ years',
            },
            { name: 'Knowledgement with Figma and Sketch' },
            {
              name: 'Maintained a customer-focused approach, ensuring deliverables align with client expectations',
            },
            {
              name: 'Specialized in bridging the gap between Designers and Developers, fostering effective communication and collaboration.',
            },
            { name: 'Expertise with HTML/CSS (and Saas/Stylus/Less)' },
            { name: 'Clear understanding of Scrum/Kanban/Agile methodologies' },
            { name: 'Git proficiency' },
            { name: 'Github/Azure proficiency' },
            { name: 'AWS EC2 proficiency' },
            { name: 'Javascript (React, Vue/Nuxt, Angular, Node) knowledge' },
            { name: 'Proeficiency in C/C#' },
          ]"
        />
      </section>
    </section>
    <section class="section-row">
      <section id="work" class="section-col">
        <h1>Where I've Worked</h1>
        <Card
          title="Design Technologist & DesignOps"
          subtitle="Philips | Hero99 (Netherlands/Brazil)"
          info="Nov 2022 - Currently | Remote"
        />
        <Card
          title="Design Technologist & Product Designer"
          subtitle="Mercedes Benz Bank | Capgemini (Brazil)"
          info="Jun 2022 - Nov 2022 | Remote"
        />
        <Card
          title="Design Technologist & Product Designer"
          subtitle="Bradesco | Capgemini (Brazil)"
          info="Mai 2021 - Jun 2022 | Remote"
        />
        <!-- Sabatic time (~1y) -->
        <Card
          title="Design Technologist & Product Designer"
          subtitle="SAI Global (US/Netherlands)"
          info="Jan 2017 - Apr 2020 | Remote"
        />
        <Card
          title="Product Designer & FrontEnd Developer"
          subtitle="Modulo Security Solutions (Brazil)"
          info="Oct 2012 - Dec 2016 | Hybrid/Partially Remote"
        />
      </section>
      <section id="work" class="section-col">
        <h1>Certifications</h1>
        <listItem
          :items-col-left="[
            {
              name: 'Visual Elements of User Interface Design (California Institute of the Arts) - 2020',
            },
            {
              name: 'Design Thinking and Global Startup (Korea Advanced Institute of Science and Technology - KAIST) - 2020',
            },
            {
              name: 'UX/UI: Principles of Interface Design (University of Sao Paulo/Brazil) - 2020',
            },
            { name: 'Microsoft Front End Web Development (DEV237x) - 2019' },
            { name: 'Programming in HTML5 with JavaScript and CSS3 - 2019' },
          ]"
        />
      </section>
    </section>

    <section id="find-me" class="section-simple">
      <h1>Get in touch</h1>
      <p>You can find me in</p>
      <p class="primaryContact">
        {{ $config.appContact }}
      </p>
      <p>
        <Icon icon="location" title="Rio de Janeiro/Brazil" />
        I'm located in Rio de Janeiro/Brazil
      </p>
      <section class="findme-icons">
        <Icon
          url="https://linkedin.com/in/AdrianoCahete"
          icon="linkedin"
          title="LinkedIn"
        />
        <Icon
          url="https://github.com/AdrianoCahete"
          icon="github"
          title="Github"
        />
        <Icon
          url="https://behance.net/AdrianoCahete"
          icon="behance"
          title="Behance"
        />
      </section>

      <!-- <Icon url="https://codepen.io/AdrianoCahete/" icon="codepen" title="CodePen" /> -->
      <Btn
        url="./resume-artifacts/[en-US]-Adriano_Cahete.pdf"
        title="Download resume"
      />
    </section>

    <section id="appInfo" class="section-simple appInfo">
      Last update: {{ year }}.{{ month }} - v{{ $config.appVersion }}
    </section>
  </section>
</template>

<script>
import listItem from "~/components/common/listItem";
import Card from "~/components/common/Card/simpleCard";
import Btn from "~/components/common/button";
import Icon from "~/components/common/Icon";

export default {
  components: {
    listItem,
    Card,
    Btn,
    Icon,
  },

  asyncData() {
    return {
      date: new Date(),
    };
  },

  data() {
    return {
      isDevMode: process.env.NODE_ENV === "development",
    };
  },

  head() {
    return {
      title: "Work",
    };
  },

  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth() + 1;
    },
    workyears() {
      return Math.abs(this.date.getFullYear() - 2010);
    },
  },

  created() {
    if (typeof this.date === "string") {
      this.date = new Date(this.date);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/section.scss";

.primaryContact {
  font-size: 2rem;
  font-weight: 600;
  font-feature-settings: "calt";
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  color: transparent;
  background: var(--titleColor);
  background-size: 400% 400%;
  background-clip: text;
  transition: background-position ease-in-out 2s;
  user-select: all;

  &:hover {
    animation: gradient-title 5s ease-in-out 1;
  }

  // &:focus {
  //   outline: 1px solid #000000;
  // }

  &::selection {
    background-color: var(--selectionBG);
    color: #ffffff;
  }
}

.findme-icons {
  margin-top: 2rem;
  margin-bottom: 1rem;

  a {
    color: var(--subtitleColor);
    fill: currentColor;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

.appInfo {
  font-size: 1rem;
  padding-bottom: 1vh;
  padding-top: 1vh;
}
</style>
