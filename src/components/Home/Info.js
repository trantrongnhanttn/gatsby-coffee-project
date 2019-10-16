import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              unde facilis a ullam optio porro rem nam itaque dolore, sunt
              libero maiores ea excepturi autem. Mollitia nemo veritatis vero
              perferendis aperiam consequuntur aspernatur, similique hic nostrum
              dolorem ipsum accusantium, assumenda qui impedit, ducimus eaque
              consectetur quos obcaecati dicta voluptatibus! Ipsam.
            </p>
            <Link to="/about/" className="btn text-uppercase btn-yellow">
              about page
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
