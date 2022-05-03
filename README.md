## 서버 실행

먼저 다음과 같은 명령어로 서버를 실행합니다.

<img width="365" alt="스크린샷 2022-05-03 오후 1 17 35" src="https://user-images.githubusercontent.com/49771744/166404097-e72522ba-0cfe-4721-b266-856cb45776a6.png">

## 회원가입

이메일과 비밀번호, 이름을 바디에 담아 리퀘스트를 보냅니다. 

<img width="268" alt="스크린샷 2022-05-03 오후 1 17 13" src="https://user-images.githubusercontent.com/49771744/166404078-8620c374-9427-4f46-89a2-8b2b40225fe8.png">

서버로부터 201 리스폰스를 받게 됩니다. MongoDB에 암호화된 비밀번호와 함께 데이터가 생성된 것을 확인하실 수 있습니다.

<img width="333" alt="스크린샷 2022-05-03 오후 1 18 13" src="https://user-images.githubusercontent.com/49771744/166404123-39c57413-5542-4309-858d-5a9a53372675.png">
<img width="484" alt="스크린샷 2022-05-03 오후 1 19 06" src="https://user-images.githubusercontent.com/49771744/166404172-ba090167-44d9-4677-ab44-1fff4de43d7d.png">

만약 중복된 이메일로 요청을 보낸다면, 다음과 같이 409 리스폰스를 받게 됩니다.

<img width="334" alt="스크린샷 2022-05-03 오후 1 20 09" src="https://user-images.githubusercontent.com/49771744/166404242-a235c547-a317-4a00-9b64-e91d3dc405bc.png">

## 로그인

이메일과 비밀번호를 바디에 담아 리퀘스트를 보냅니다.

<img width="262" alt="스크린샷 2022-05-03 오후 1 23 02" src="https://user-images.githubusercontent.com/49771744/166404427-e9c9f88a-1be5-4abe-a648-90cdfa64d64f.png">

서버로부터 201 리스폰스를 받게 됩니다. 리스폰스와 함께 credential 데이터를 받게 되는데, 클라이언트에서 이 정보를 로컬 스토리지에 보관합니다.

<img width="835" alt="스크린샷 2022-05-03 오후 1 24 15" src="https://user-images.githubusercontent.com/49771744/166404503-ebc6875e-e76b-4304-a3bd-a01abb8a6070.png">

만약 잘못된 이메일이나 비밀번호로
