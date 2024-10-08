function ProfileImage({ photo }) {
  return (
    <div className="w-auto h-full max-w-8 max-h-8 flex items-center justify-center">
      <img className="w-full h-full rounded-full" src={photo} alt="" />
    </div>
  );
}

export default ProfileImage;
