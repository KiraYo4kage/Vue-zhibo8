export default {
  toggleShow(state,data) {
    state.left.show = data
  },
  avatar(state,data) {
    state.header.avatar = data
  },
  title(state,data) {
    state.header.title = data
  },
  icons(state,data) {
    state.header.icons = data
  }
}
