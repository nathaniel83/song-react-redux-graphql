import React from "react"
import styled from "styled-components"
import { media } from "theme/utils/media"

export default styled.div`
  h2 {
    letter-spacing: 0.01em;
    font-size: 1.8em;
    font-weight: 600 !important;
  }
  h3 {
    font-size: 1.2em;
    font-weight: 450 !important;
  }
  h2 + h3 {
    margin-top: 0;
  }
`
