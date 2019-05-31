import styled from 'styled-components';
const css = `
div.post {
	margin: 10px auto;
	border: 2px solid #d0d0d0;
	border-radius: 5px;
	max-width: 640px;
}
div.post .inner {
	padding: 10px 20px;
	line-height: 16px;
}

div.post .postHeader {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20px 10px;
}

div.post .postHeader .avatar {
	width: 32px;
	border-radius: 16px;
}

div.post .postHeader .Username {
	font-weight: bold;
	margin-left: 5px;
}

div.post .inner p {
}
`;
const ScopedCSS = styled.div([css]);
export default ScopedCSS;
