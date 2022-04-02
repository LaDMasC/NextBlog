import styled, { css } from "styled-components";

// margin : ${props => props.margin.map(i => i + 'px') || 0};

export const Sv = (props) => (
  <StyledView {...props}>
    {props.children}
    {props.text}
  </StyledView>
);

export const StyledView = styled.div`
  /* width와 height */
  //숫자만 쓰면 px로 적용, 문자열이면 그대로 적용(100% or 50vh)
  ${(props) =>
    typeof props.w == "string" ? w_string : typeof props.w == "number" && w}
  ${(props) =>
    typeof props.h == "string" ? h_string : typeof props.h == "number" && h}

/* flex */
${(props) => props.f && f}

/* border */
${(props) => props.b && b}
${(props) => props.br && br} //border-radius

  /* 정렬 속성 */
  ${(props) => props.row && row}
  ${(props) => props.row_reverse && row_reverse}
  ${(props) => props.col && col}
  ${(props) => props.col_reverse && col_reverse}
  ${(props) => props.ct && ct}
  ${(props) => props.aed && aed}
  ${(props) => props.jed && jed}
  ${(props) => props.ast && ast}
  ${(props) => props.jst && jst}
  ${(props) => props.act && act}
  ${(props) => props.jct && jct}
  ${(props) => props.sa && sa}
  ${(props) => props.jsb && jsb}

  /* gap */
  ${(props) => props.g && g}
  ${(props) => props.gx && gx}
  ${(props) => props.gy && gy}

  ${(props) => props.white && white}

  
  /*마진 속성*/
  ${(props) => props.m && m}
  ${(props) => props.mt && mt}
  ${(props) => props.mb && mb}
  ${(props) => props.ml && ml}
  ${(props) => props.mr && mr}
  ${(props) => props.mx && mx}
  ${(props) => props.my && my}


  /*패딩 속성*/
  ${(props) => props.p && p}
  ${(props) => props.pt && pt}
  ${(props) => props.pb && pb}
  ${(props) => props.pl && pl}
  ${(props) => props.pr && pr}
  ${(props) => props.px && px}
  ${(props) => props.py && py}


  
  /* 배치 속성 */
  ${(props) => props.position && position}

  ${(props) => props.top && top}
  ${(props) => props.bottom && bottom}
  ${(props) => props.left && left}
  ${(props) => props.right && right}



  /*background*/
  ${(props) => props.bg && bg}



  ${(props) => props.center && center}
  ${(props) => props.left && left}
  ${(props) => props.right && right}

  ${(props) => props.pointer && pointer}

  ${(props) => props.z && z}

  ${(props) => props.wrap && wrap}

  ${(props) => props.hidden && hidden}

  // 모바일
  ${(props) => props.mm && mm}
  ${(props) => props.mmt && mmt}
  ${(props) => props.mmb && mmb}
  ${(props) => props.mml && mml}
  ${(props) => props.mmr && mmr}


  ${(props) => props.mp && mp}
  ${(props) => props.mpt && mpt}
  ${(props) => props.mpb && mpb}
  ${(props) => props.mpl && mpl}
  ${(props) => props.mpr && mpr}

  ${(props) => props.mobile && mobile}
`;

const w = css`
  width: ${(props) => props.w}px;
`;

const w_string = css`
  width: ${(props) => props.w};
`;

const h = css`
  height: ${(props) => props.h}px;
`;

const h_string = css`
  height: ${(props) => props.h};
`;

const f = css`
  display: flex;
  flex: ${(props) => props.f};
`;

const b = css`
  border: ${(props) => props.b};
`;

const br = css`
  border-radius: ${(props) => props.br}px;
`;

const bg = css`
  background-color: ${(props) => props.bg};
`;

const row = css`
  display: flex;
  flex-direction: row !important;
`;
const row_reverse = css`
  display: flex;
  flex-direction: row-reverse !important;
`;
const col = css`
  display: flex;
  flex-direction: column !important;
`;
const col_reverse = css`
  display: flex;
  flex-direction: column-reverse !important;
`;

const ct = css`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
`;

const jsb = css`
  display: flex;
  justify-content: space-between !important;
`;

const ast = css`
  display: flex;
  align-items: flex-start !important;
`;

const sa = css`
  display: flex;
  justify-content: space-around !important;
`;

const jst = css`
  display: flex;
  justify-content: flex-start !important;
`;

const aed = css`
  display: flex;
  align-items: flex-end !important;
`;

const jed = css`
  display: flex;
  justify-content: flex-end !important;
`;

const jct = css`
  display: flex;
  justify-content: center !important;
`;

const act = css`
  display: flex;
  align-items: center !important;
`;

const g = css`
  display: flex;
  gap: ${(props) => props.g}px;
`;

const gx = css`
  display: flex;
  column-gap: ${(props) => props.gx}px;
`;

const gy = css`
  display: flex;
  row-gap: ${(props) => props.gy}px;
`;

const white = css`
  background-color: white;
`;

const disableSelect = css`
  user-select: none;
`;

// const center = css`
//   text-align: center;
// `;
// const left = css`
//   text-align: left;
// `;
// const right = css`
//   text-align: right;
// `;
const pointer = css`
  cursor: pointer;
`;

const hidden = css`
  display: none;
`;

//------------------------------------------------------------------
const p = css`
  padding: ${(props) => props.p}px !important;
`;
const pt = css`
  padding-top: ${(props) => props.pt}px !important;
`;
const pb = css`
  padding-bottom: ${(props) => props.pb}px !important;
`;
const pl = css`
  padding-left: ${(props) => props.pl}px !important;
`;
const pr = css`
  padding-right: ${(props) => props.pr}px !important;
`;
const px = css`
  padding-left: ${(props) => props.px}px !important;
  padding-right: ${(props) => props.px}px !important;
`;
const py = css`
  padding-top: ${(props) => props.py}px !important;
  padding-bottom: ${(props) => props.py}px !important;
`;
//------------------------------------------------------------------
const m = css`
  margin: ${(props) => props.m}px !important;
`;
const mt = css`
  margin-top: ${(props) => props.mt}px !important;
`;
const mb = css`
  margin-bottom: ${(props) => props.mb}px !important;
`;
const ml = css`
  margin-left: ${(props) => props.ml}px !important;
`;
const mr = css`
  margin-right: ${(props) => props.mr}px !important;
`;

const mm = css`
  @media (max-width: 992px) {
    margin: ${(props) => props.mm}px !important;
  }
`;
const mmt = css`
  @media (max-width: 992px) {
    margin-top: ${(props) => props.mmt}px !important;
  }
`;

const mmb = css`
  @media (max-width: 992px) {
    margin-bottom: ${(props) => props.mmb}px !important;
  }
`;

const mml = css`
  @media (max-width: 992px) {
    margin-left: ${(props) => props.mml}px !important;
  }
`;

const mmr = css`
  @media (max-width: 992px) {
    margin-right: ${(props) => props.mmr}px !important;
  }
`;

const mp = css`
  @media (max-width: 992px) {
    padding: ${(props) => props.mp}px !important;
  }
`;

const mpt = css`
  @media (max-width: 992px) {
    padding-top: ${(props) => props.mpt}px !important;
  }
`;

const mpb = css`
  @media (max-width: 992px) {
    padding-bottom: ${(props) => props.mpb}px !important;
  }
`;

const mpl = css`
  @media (max-width: 992px) {
    padding-left: ${(props) => props.mpl}px !important;
  }
`;

const mpr = css`
  @media (max-width: 992px) {
    padding-right: ${(props) => props.mpr}px !important;
  }
`;

const mobile = css`
  @media (min-width: 992px) {
    display: none;
  }
`;

const mx = css`
  margin-left: ${(props) => props.mx}px !important;
  margin-right: ${(props) => props.mx}px !important;
`;
const my = css`
  margin-top: ${(props) => props.my}px !important;
  margin-bottom: ${(props) => props.my}px !important;
`;
//------------------------------------------------------------------

const z = css`
  z-index: ${(props) => props.z};
`;

//------------------------------------------------------------------

const position = css`
  position: ${(props) => props.position};
`;

const top = css`
  top: ${(props) => props.top}px;
`;
const bottom = css`
  bottom: ${(props) => props.bottom}px;
`;
const left = css`
  left: ${(props) => props.left}px;
`;
const right = css`
  right: ${(props) => props.right}px;
`;

const wrap = css`
  flex-wrap: wrap;
`;
