import styled from 'styled-components'
// import { offSet } from '../utils/offset.js'

// let space = 'calc( 50vw - 325px )'
// let neg = 'calc( 325px - 50vw )'
// let space = '10vw'

export const ContentContainer = styled.div`
  >*:first-child {
    margin-top: 0;
  } 

// lists
  ul,
  ol {
    font-size: 1em;
    margin-bottom: 1.8em;
    margin-top: .4em;
    list-style: none;
    li {
      padding-left: -.4em;
      line-height: 1.6;
    }
    li::before{
      content: '‧';
      opacity: 1;
      margin-right: .3em;
      margin-left: -.55em;
    }
  }
`
