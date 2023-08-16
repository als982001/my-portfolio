export const getImageUrl = async (imageName: string, image: File) => {
  imageName = encodeURIComponent(imageName);

  let uploadResponse = await fetch(
    `http://localhost:3000/api/post/image?file=${imageName}`
  );
  uploadResponse = await uploadResponse.json();

  //S3 업로드
  const formData = new FormData();
  Object.entries({ ...uploadResponse.fields, file: image }).forEach(
    ([key, value]) => {
      formData.append(key, value);
    }
  );

  let uploadResult = await fetch(uploadResponse.url, {
    method: "POST",
    body: formData,
  });

  if (uploadResult.ok) {
    return `${uploadResult.url}/${imageName}`;
  } else {
    return null;
  }
};