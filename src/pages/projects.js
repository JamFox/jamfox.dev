import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  Button,
  HeadingXL,
  SEO,
  TextBody,
  HeadingL,
  TextDate,
} from "../components"
import {HomeLayout} from "../components/LayoutHome"
import {StaticImage} from "gatsby-plugin-image"
import {BREAKPOINT} from "../utils/constants"

const Wrapper = styled.div`
  margin: 1vh 1vh 1vh 1vh;
  text-align: center;
`

const Post = styled.div`
  margin-bottom: 50px;
  vertical-align: middle;
  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const HeadingL2 = styled(HeadingL)`
  font-size: 40px;
  background: -webkit-linear-gradient(
    120deg,
    hsla(29, 100%, 79%, 1),
    hsla(29, 100%, 79%, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function AboutPage() {
  return (
    <>
      <SEO title="Projects" />
      <HomeLayout>
        <Wrapper>
          <HeadingXL>
            <Link to="/">Projects </Link>
          </HeadingXL>
        </Wrapper>

        <Post>
          <HeadingL2>
            <StaticImage
              src="../images/CERN.jpg"
              alt=":CERN:"
              width={50}
              aspectRatio={1 / 1}
              quality={90}
            />
            &nbsp;CERN
          </HeadingL2>
          <TextDate>Feb 2022 - Present</TextDate>
          <TextBody>
            Beams Department Accelerator Control Group Technical Student.
          </TextBody>
          <TextBody>
            Developing accadmlib - a Python library that allows system
            administrators bypass the headache of dealing with an overwhelming
            number of different CERN services.
          </TextBody>
          <TextBody>Automating system management with Ansible and CI.</TextBody>
          <TextBody>
            Automating administration of FastX-based remote desktop solution
            cluster.
          </TextBody>
          <TextBody>
            Coordinating and standardizing development workflows and automation.
          </TextBody>
        </Post>

        <Post>
          <HeadingL2>
            <StaticImage
              src="../images/ITUK.jpg"
              alt=":ITUK:"
              width={50}
              aspectRatio={1 / 1}
              quality={90}
            />
            &nbsp;ITÜK
          </HeadingL2>
          <TextDate>May 2021 - May 2022</TextDate>
          <TextBody>
            Managed a board of 7 of the non-profit organisation of nearly 200
            members to be voice of IT students.
          </TextBody>
          <TextBody>
            Collaborated closely with TalTech, as well as Estonia's largest IT
            companies and associations alike to enrich the student life by
            organizing educational and entertainment events.
          </TextBody>
        </Post>

        <Post>
          <HeadingL2>
            <StaticImage
              src="../images/TalTech.jpg"
              alt=":ITUK:"
              width={50}
              aspectRatio={1 / 1}
              quality={90}
            />
            &nbsp;TalTech
          </HeadingL2>
          <TextDate>May 2021 - Feb 2022</TextDate>
          <TextBody>
            Automated cluster configuration management with GitLab CI to
            massively increase system administration efficiency.
          </TextBody>
          <TextBody>
            Set up Hashicorp Vault for internal credentials and secrets
            management.
          </TextBody>
          <TextBody>
            Provided secure solutions to requirements of current and to-be
            clients of the HPC Centre.
          </TextBody>
          <TextBody>
            Developed InvenioRDM-based containerized data repository on Nginx,
            Flask, Postgre, Elasticsearch.
          </TextBody>
        </Post>

        <Post>
          <HeadingL2>
            <StaticImage
              src="../images/VRChat.jpg"
              alt=":ITUK:"
              width={50}
              aspectRatio={1 / 1}
              quality={90}
            />
            &nbsp;VRChat 3D Modeler
          </HeadingL2>
          <TextDate>Jan 2018 - Mar 2018</TextDate>
          <TextBody>
            Imported and optimized 3D models from many different formats and
            environments with Blender as commissions into a Unity video-game
            called VRChat.
          </TextBody>
        </Post>

        <Post>
          <HeadingL2>
            <StaticImage
              src="../images/CSGO.jpg"
              alt=":ITUK:"
              width={50}
              aspectRatio={1 / 1}
              quality={90}
            />
            &nbsp;CSGO Virtual Items Trader
          </HeadingL2>
          <TextDate>Oct 2015 - Dec 2017</TextDate>
          <TextBody>
            Day traded virtual goods related to a video-game called Counter
            Strike: Global Offensive.
          </TextBody>
          <TextBody>
            Analyzed trends, news and collaborated with many individuals to
            optimize earnings.
          </TextBody>
        </Post>
      </HomeLayout>
    </>
  )
}
