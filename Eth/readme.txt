1. 블록체인 역사, 구조, 특징, 이해 등등

2. 2세대 블록체인 대표주자 이더리움 구축
 - 1세대 : 비트코인 (대장주) -> 블록체인상에 화페만 구현된 형태
 - 1단계 : 네트워크 구축 (블록체인 구현되어 있다)
 -         이더리움기반의 네트워크 구축 (이더리움을 구축한 언어는 다양하다
           ->구글의 Go를 기반으로 만든 것을 가장많이 사용 -> Geth) 
 -         https://geth.ethereum.org/downloads 윈도우용 다운로드
 - 네트워크 설치 위치 지정
   네트워크: 상용 <- 테스트 <- private 3가지 형태로 존재
   window
   $ mkdir C:\eth_net
   $ cd C:\eth_net
   $ mkdir ./eth_net/Geth
   $ mkdir ./eth_net/Geth/ethereum
   $ mkdir ./eth_net/Geth/ethereum/data
   
   linux
   $ mkdir ./eth_net   
   $ mkdir ./eth_net/Geth
   $ mkdir ./eth_net/Geth/ethereum
   $ mkdir ./eth_net/Geth/ethereum/data
 - geth 설치
 - 계정생성
  현재위치는 C:\eth_net\Geth
  $ geth --datadir "./ethereum/data" account new 
  0x32B5962949CB8722a8dFF70c3B788953dBCb0dC6
  0x195652A411AAaADfEFe48cd1E5A1d38376612474
 - 계정 확인
  $ geth --datadir "./ethereum/data" account list
 - ICO 행사에 투자를 받아서(예를들면) 1명이 돈을내고 주주가 되었다
  => 계좌를 하나 생성해 주었다 
  => 현재 계좌는 2개(소유주, 주주1명)
  소유주  : 0x71c8252ed5b5e4452575157dd33958a5df7368e7
  주주1명:  0xca065418adaaa01b2183a93c7ceb65cbc0cbf76e 
 - 네트워크 구성을 위해 제네시스 블록 구성 파일을 위치해둔다
   => 최초 블록을 쌓게 된다
   => C:\eth_net\Geth\Genesis.json 위치
 - 제네시스 블록을 가지고 초기 네트워크를 구축 명령 수행
  $ geth --datadir "./ethereum/data" init "./Genesis.json"
 - 네트워크 가동
  $ geth
   --identity "PrivateNetwork"  : 네트워크 이름
   --datadir "./ethereum/data"  : 네트워크 위치
   --port "30303"               : 네트워크의 Listening Port 지정
   --rpc                        : 원격접속 및 명령 수행 OK, Enable the HTTP-RPC server
   --rpcaddr 0.0.0.0            : RPC서버 주소 => 기본값 localhost 
   --rpcport "8123"             : RPC서버 포트
   --rpccorsdomain "*"          : 기재하면 도메인으로도 접속 가능
   --nodiscover                 : 제네시스 블럭과 네트워크 ID에 있는 블록 연결 금지
   --networkid 1900             : 네트워크 아이디
   --nat "any"                  : 외부 주소와 내부 주소간 변화 처리 
   --allow-insecure-unlock      : 계좌 언락 허가 추가
   --rpcapi "db, eth, net, web3, miner, personal" : 콘솔로 오픈이 되는 api 목록, web3=>js사용가능
   console                      : 콘솔모드 오픈, 모든 출력은 콘솔로 진행

  $ geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover  --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" --allow-insecure-unlock console
 
 - 원격 접속
  $ geth attach http://localhost:8123
 - 계좌 확인
  $ eth.accounts
 - 잔고 확인
  $ eth.getBalance( eth.accouts[0] )

 [리눅스상에서 네트워크 구축]
 - 이더리움 설치
 $ sudo apt-get update
 $ sudo apt-get upgrade
 $ sudo apt-get install software-properties-common 
 $ sudo add-apt-repository ppa:ethereum/ethereum
 $ sudo apt-get update
 $ sudo apt-get install ethereum
 - 네트워크 구축
 $ mkdir ./eth_net   
 $ mkdir ./eth_net/Geth
 $ mkdir ./eth_net/Geth/ethereum
 $ mkdir ./eth_net/Geth/ethereum/data
 $ cd ./eth_net/Geth
 $ geth --datadir "./ethereum/data" account new
    0x3166fA091D6D95B190e2Fc7CaFF77e09E16e5311
     0xE4932c90DdCfb890E41be0e26f143C9DE1c12a75

     0xca77e191fcd6f2bc99c555124623879c4e4d3b2b



3. 이더리움의 사설 네트워크 외부에서 연동하는 방법(RPC)
 - 전자지갑 구현
  1) PRC 접속을 통해서 명령을 전송하여 수행
  2) MIST 브라우저 (이더리움 GUI툴) 수행
  3) nodejs 기반 client side에서 수행
  3) nodejs 기반 server side에서 수행
  3) nodejs 기반 socket.io 이용한 실시간 통신으로 수행
  
4. 솔리디티 언어 이해 (이더리움 네트워트 상에 프로그램이 가미된 앱을 개발하는 언어)

5. DApp 구성 ( Node 기반, 사설네트워크 + node 서비스 )
 - 전자지갑
 - 전자투표
 - 배팅시스템.. 

eth.sendTransaction({
    from:eth.accounts[0],
    to:eth.accounts[1],
    value:web3.toWei(1, 'ether')
  })