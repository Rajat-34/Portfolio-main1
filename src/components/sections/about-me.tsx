import Image from 'next/image';

import RajatProfilePage from '/public/images/Rajat_Profile_Page.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={RajatProfilePage}
              alt="Rajat Profile Page"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            Welcome to my realm as a dynamic web developer! 🌟<br /><br />

            Embarking on my journey into web development in 2021 was just the beginning of an exciting adventure. Three years later, I proudly stand as a passionate Full Stack Engineer (FSE), specializing in React.js, Java, and Java Framework. I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matter to me.<br /><br />

            <b>Spring Boot</b>: As the backbone of my backend development, Spring Boot simplifies complex configurations, allowing me to create production-ready applications quickly. Its powerful features and modular architecture empower me to build scalable, maintainable, and high-performing solutions with ease. 🚀 💡<br /><br />

            <b>Java</b>: As the foundation of my development expertise, Java offers unparalleled stability, security, and performance. Its robust ecosystem and cross-platform capabilities empower me to build versatile, scalable applications, making it the core language that drives my backend solutions. 🖥️<br /><br />

            <b>React.js</b>: The heart of modern web development, React.js fuels my passion for crafting intuitive user interfaces and dynamic frontend experiences. Its component-based architecture empowers me to create immersive web applications that resonate with users and elevate brands. 🔍<br /><br />

            <b>Spring MVC</b>: With Spring MVC, I craft responsive and dynamic web applications. Its comprehensive support for RESTful APIs and seamless integration with front-end technologies enable me to deliver user-centric experiences that are both powerful and intuitive. 🌐<br /><br />

            <b>Hibernate</b>: Hibernate is my go-to ORM framework for managing data persistence. Its ability to map Java objects to database tables and its rich query language streamline database interactions, ensuring efficient and optimized data handling in my applications. 🛠️<br /><br />

            In addition to my deep understanding of backend technologies, I leverage the power of <b>SQL—a</b> cornerstone of database management. With SQL, I craft complex queries and optimize data retrieval, ensuring my applications are data-efficient, secure, and highly performant. 📊I also harness the full potential of Git and GitLab—indispensable tools in my development workflow. With Git, I maintain meticulous version control, while GitLab enables seamless collaboration and continuous integration, driving efficiency and innovation across my projects. 🛠️<br /><br />

            Driven by creativity and fueled by innovation, I thrive on pushing the boundaries of what's possible in web development. From crafting pixel-perfect designs to optimizing performance, I am dedicated to delivering exceptional results that exceed expectations and inspire action. 🎨<br /><br />

            Join me on this exhilarating journey as we unlock the full potential of web development, one line of code at a time. 💻
          </Typography>

          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Tech in Computer Science
              </Typography>
              <Typography component="li">Part time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Full Stack Web Developer</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
