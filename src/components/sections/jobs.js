import React, { useState } from 'react'
import styled from "styled-components"
import Section from "../section"
import { colors, fonts, fontSizes, media } from "../../styles"

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;

  ${media.phone`flex-direction: column;`}
`

const TabsList = styled.ul`
  ${media.phone`
  display: flex;
  overflow-x:scroll;
  `}
`
const TabItem = styled.li`
  padding: 10px 20px;
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  cursor: pointer;
  white-space:nowrap;

  border-left: 2px solid ${props => (props.isActive) ? colors.green : colors.slate};
  color: ${props => (props.isActive) ? colors.green : colors.slate};
  background: ${props => (props.isActive) ? colors.lightGreen : `unset`};

  &:hover {
    color: ${colors.green};
  }
  
  ${media.phone`
  display: inline-block;
  border: 0;
  border-bottom: 2px solid ${props => (props.isActive) ? colors.green : colors.slate};
  `}
`

const Content = styled.div`
  padding: 0 0 0 30px;
  ${media.phone`padding: 30px 0 0;`}
`
const JobDetails = styled.div`
  display: ${(props) => (props.isVisible) ? 'unset' : 'none'};
`
const Title = styled.div`
  padding: 10px 0;
  color: ${colors.lightSlate};
  font-weight: 700;
`
const Company = styled.div`
  display: inline;
  color: ${colors.green};
`
const Dates = styled.div`
  font-family: ${fonts.mono};
  font-size: ${fontSizes.xs};
  margin-bottom: 20px;
`
const TaskItem = styled.li`
  position: relative;
  margin: 0 0 10px 20px;
  font-size: ${fontSizes.lg};

  &:before {
    content: '▹';
    color: ${colors.green};
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-20px);
  }
`

export default ({id, data}) => {
  const jobs = data
  const [activeTab, setActiveTab] = useState(0)

  const handleClick = (index) => {
    setActiveTab(index)
  }

  return (
    <Section id={id} title="where i've worked">
      <Container>
        <TabsList>
        {
          jobs && jobs.map((job, i) => {
            const { frontmatter } = job.node
            const {company} = frontmatter
            return (
              <TabItem key={i} onClick={e => handleClick(i)} isActive={activeTab === i}>{company}</TabItem>
            )
          })
        }
        </TabsList>
        <Content>
          {
            jobs && jobs.map((job, i) => {
              const { frontmatter } = job.node;
              const {company, title, startDate, endDate, tasks} = frontmatter;
              return (
                <JobDetails key={i} isVisible={activeTab === i}>
                  <Title>
                    {title} <Company>@ {company}</Company>
                  </Title>
                  <Dates>
                    <span>{startDate} - {endDate}</span>
                  </Dates>
                  <ul>
                    {
                      tasks && tasks.map((task, i) => {
                        return (
                          <TaskItem key={i}>{task}</TaskItem>
                        )
                      })
                    
                    }
                  </ul>
                </JobDetails>
              )
            })
          }
        </Content>
      </Container>
    </Section>
  )
}
