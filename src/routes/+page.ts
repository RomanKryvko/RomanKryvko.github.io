export const load = async ({ fetch }: any) => {
  const res = await fetch('https://api.github.com/users/RomanKryvko');
  if (res.status != 200) {
    console.error(res);
    return;
  }
  const json = await res.json();
  return {
    avatar_url: json.avatar_url,
    html_url: json.html_url,
    login: json.login
  };
};
