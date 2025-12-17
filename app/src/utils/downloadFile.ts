

export const downloadFile = async (src: string, filename: string) => {
	const response = await fetch(src);
	const blob = await response.blob();
	const url = URL.createObjectURL(blob);

	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);

	URL.revokeObjectURL(url);
}