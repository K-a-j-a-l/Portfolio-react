
import { Col } from 'react-bootstrap'
type projectCardProps={
    title:string,
    description:string,
    imgUrl:string,
}

export default function ProjectCard({title, description, imgUrl}:projectCardProps) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
