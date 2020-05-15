export default {
	render(vnode) {
		const router = this.$router;
		const routerArgument = {
			name: this.directory,
			params: {
				name: this.name,
			},
		};
		return vnode('a', {
			on: {
				click() {
					router.push(routerArgument);
				},
			},
		}, name);
	},
	props: {
		directory: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		gloss: {
			type: String,
			required: false,
		},
	},
};
