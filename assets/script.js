function nav () {
	return {
		open: false,
		height: 0,
		closeNav() {
			this.open = false
			this.height = 0
		},
		toggleNav () {
			if (this.open) {
				return this.closeNav()
			}

			this.open = !this.open
			this.height = this.$refs.menu.scrollHeight
		}
	}
}
