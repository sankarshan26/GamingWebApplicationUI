import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Modal, Sheet, Button } from "@mui/joy";
import Retry from "../../assets/retry";
import PlayIcon from "../../assets/playIcon";
import zero from "../../assets/images/zero.png";
import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.png";
import five from "../../assets/images/five.png";
import six from "../../assets/images/six.png";
import seven from "../../assets/images/seven.png";
import eight from "../../assets/images/eight.png";
import nine from "../../assets/images/nine.png";

function gamePage() {
  const [availableBalance, setAvailableBalance] = useState((0.0).toFixed(2));
  const [activeGameOption, setActiveGameOption] = useState("30 sec");
  const [activeGameId, setActiveGameId] = useState("2024723373");
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);

  useEffect(() => {
    // Timer logic: decrement the time every second
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0; // Ensure the timer stops at 0
        }
        return prevTime - 1; // Decrement the time
      });
    }, 1000);

    // Cleanup function to clear the timer
    return () => clearInterval(timer);
  }, []);

  // Function to format time in mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const greenButton = (
    <button className="w-[10px] h-[10px] bg-[#4CAF50] rounded-full text-lg" >
      &nbsp;
    </button>
  );

  const redButton = (
    <button className="w-[10px] h-[10px] bg-[#F44336] rounded-full text-lg" >&nbsp;</button>
  );

  const violetButton = (
    <button className="w-[10px] h-[10px] bg-[#9C27B0] rounded-full text-lg" >&nbsp;</button>
  );

  function createData(period, number) {
    const big_small = number > 4 ? "Big" : "Small";
    let Result = "";
    if (number === 0) {
      Result = (
        <div>
          <span>{redButton}</span>
          <span className="ml-1">{violetButton}</span>
        </div>
      );
    } else if (number === 1 || number === 3 || number === 7 || number === 9) {
      Result = (
        <div>{greenButton}</div>
      );
    } else if (number === 2 || number === 4 || number === 6 || number === 8) {
      Result = (
        <div>{redButton}</div>
      );
    } else if (number === 5){
      Result = (
        <div>
          <span>{greenButton}</span>
          <span className="ml-1">{violetButton}</span>
        </div>
      );
    }
    return { period, number, big_small, Result };
  }

  const getColor = (number) => {
    if (number === 1 || number === 3 || number === 7 || number === 9) {
      return {color: '#18B660'};
    } else if (number === 2 || number === 4 || number === 6 || number === 8) {
      return {color: '#F44336'};
    } else if (number === 5) {
      return {
        background: 'linear-gradient(180deg, #18B660 50%, #9C27B0 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      };
    } else if (number === 0) {
      return {
        background: 'linear-gradient(180deg, #F44336 50%, #9C27B0 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      };
    }
  }

  const rows = [
    createData("2024723374", 3),
    createData("2024723375", 7),
    createData("2024723376", 5),
    createData("2024723377", 2),
    createData("2024723378", 8),
    createData("2024723379", 9),
    createData("2024723372", 5),
    createData("2024723371", 1),
    createData("2024723370", 4),
    createData("2024723312", 3),
    createData("2024723323", 8),
    createData("2024723345", 0),
    createData("2024723367", 6),
  ];

  const availableBalanceSection = (
    <div className="bg-[#415A77] flex flex-col rounded-lg p-2">
      <div className="text-white">
        Available Balance: &#8377;{availableBalance}
      </div>

      <div className="flex justify-between ">
        <div className="mt-2 flex gap-6">
          <button className="bg-[#6DA7F4] text-black px-4 py-2 rounded-full text-sm font-medium">
            Withdraw
          </button>
          <button className="bg-[#FFA82E] text-black rounded-full py-2 px-4 text-sm font-medium">
            Deposit
          </button>
        </div>
        <div className="mr-2 flex items-center">
          <button
            className=""
            onClick={() => {
              console.log("Retry button clicked");
            }}
          >
            <Retry />
          </button>
        </div>
      </div>
    </div>
  );

  const activeGameContainer =
    "flex flex-col bg-gradient-to-br from-[#FFE29F] to-[#FFA82E] text-xs font-semibold text-black py-6 px-2 rounded-full gap-2";

  const inactiveGameContainer =
    "flex flex-col bg-[#1B263B] text-xs font-semibold text-white py-6 px-2 rounded-full items-stretch gap-2";

  const activeGameButton =
    "border-2 border-[#FFE29F] border-solid border-opacity-100 rounded-full py-2 px-3";

  const inactiveGameButton = "rounded-full py-2 px-3 bg-[#2F3D57]";

  const gameOptionsSection = (
    <div className="flex flex-row justify-between items-end my-2 sm:my-4">
      <button
        className={
          activeGameOption === "30 sec"
            ? activeGameContainer
            : inactiveGameContainer
        }
        onClick={() => setActiveGameOption("30 sec")}
      >
        <div>Win Go</div>
        <div
          className={
            activeGameOption === "30 sec"
              ? activeGameButton
              : inactiveGameButton
          }
        >
          30
          <br />
          sec
        </div>
      </button>

      <button
        className={
          activeGameOption === "1 min"
            ? activeGameContainer
            : inactiveGameContainer
        }
        onClick={() => setActiveGameOption("1 min")}
      >
        <div>Win Go</div>
        <div
          className={
            activeGameOption === "1 min" ? activeGameButton : inactiveGameButton
          }
        >
          1<br />
          min
        </div>
      </button>

      <button
        className={
          activeGameOption === "3 min"
            ? activeGameContainer
            : inactiveGameContainer
        }
        onClick={() => setActiveGameOption("3 min")}
      >
        <div>Win Go</div>
        <div
          className={
            activeGameOption === "3 min" ? activeGameButton : inactiveGameButton
          }
        >
          3<br />
          min
        </div>
      </button>

      <button
        className={
          activeGameOption === "5 min"
            ? activeGameContainer
            : inactiveGameContainer
        }
        onClick={() => setActiveGameOption("5 min")}
      >
        <div>Win Go</div>
        <div
          className={
            activeGameOption === "5 min" ? activeGameButton : inactiveGameButton
          }
        >
          5<br />
          min
        </div>
      </button>
    </div>
  );

  const timerSection = (
    <div className="bg-gradient-to-br from-[#1ED2FB] to-[#2E70FF] rounded p-2 flex flex-row justify-between items-center flex-wrap gap-1">
      <div className="text-white font-medium">
        <div className="flex flex-row border border-solid border-white rounded-3xl p-1 gap-1 text-xs items-center justify-center hover:cursor-pointer"
        onClick={()=>{setHowToPlayOpen(true)}}>
          <span>
            <PlayIcon />
          </span>
          <span>How To Play</span>
        </div>
        <div className="text-xs mt-2 font-bold">{`Win Go ${activeGameOption}`}</div>
        <div className="w-full flex flex-row gap-1 mt-2">
          <img src={seven} alt="seven" className="w-6 h-6" />
          <img src={six} alt="six" className="w-6 h-6" />
          <img src={zero} alt="zero" className="w-6 h-6" />
          <img src={five} alt="five" className="w-6 h-6" />
          <img src={four} alt="four" className="w-6 h-6" />
        </div>
      </div>
      <div className="text-white flex flex-col">
        <div className="text-center text-xs font-bold sm:text-md">
          Time remaining
        </div>
        <div className="mt-2 text-center">
          {/* Display formatted time */}
          {formatTime(timeRemaining)
            .split("")
            .map((char, index) =>
              char === ":" ? (
                <span key={index} className="mr-1">:</span>
              ) : (
                <span
                  key={index}
                  className="bg-[#FFFFFF1A] rounded px-1 py-1 mr-1"
                >
                  {char}
                </span>
              )
            )}
        </div>
        <div className="mt-2 text-center">{activeGameId}</div>
      </div>
    </div>
  );

  const betSection = (
    <div>
      <div className="flex flex-wrap text-white gap-1 flex-row justify-between my-2 sm:my-4">
        <button className="bg-[#4CAF50] rounded-full px-2 py-1 w-1/4 min-w-[90px] text-sm">
          Join Green
        </button>
        <button className="bg-[#9C27B0] rounded-full px-2 py-1 w-1/4 min-w-[90px] text-sm">
          Join Violet
        </button>
        <button className="bg-[#F44336] rounded-full px-2 py-1 w-1/4 min-w-[90px] text-sm">
          Join Red
        </button>
      </div>

      <div className="border-2 border-solid border-transparent bg-gradient-to-b from-[#6891a2] via-[rgba(29,132,254,0)] to-[rgba(62,197,255,0)] bg-clip-border rounded-2xl p-2 flex flex-nowrap flex-col gap-2">
        <div className="flex justify-evenly">
          <button className="w-1/6">
            <img src={zero} alt="zero" />
          </button>
          <button className="w-1/6">
            <img src={one} alt="one" />
          </button>
          <button className="w-1/6">
            <img src={two} alt="two" />
          </button>
          <button className="w-1/6">
            <img src={three} alt="three" />
          </button>
          <button className="w-1/6">
            <img src={four} alt="four" />
          </button>
        </div>
        <div className="flex justify-evenly">
          <button className="w-1/6">
            <img src={five} alt="five" />
          </button>
          <button className="w-1/6">
            <img src={six} alt="six" />
          </button>
          <button className="w-1/6">
            <img src={seven} alt="seven" />
          </button>
          <button className="w-1/6">
            <img src={eight} alt="eight" />
          </button>
          <button className="w-1/6">
            <img src={nine} alt="nine" />
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-2">
        <button className="text-white bg-custom-radial-big shadow-custom w-1/2 rounded-2xl px-2 py-1 text-sm">
          Big
        </button>
        <button className="text-white bg-custom-radial-small shadow-custom w-1/2 rounded-2xl px-2 py-1 text-sm">
          Small
        </button>
      </div>
    </div>
  );

  const gameHistory = (
    <div>
      <TableContainer component={Paper} sx={{ backgroundColor : '#1B263B', margin: '10px 0px', borderRadius: '12px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell align="center" sx={{color: '#5D7593'}}>Period</TableCell>
              <TableCell align="center" sx={{color: '#5D7593'}}>Number</TableCell>
              <TableCell align="center" sx={{color: '#5D7593'}}>Big/Small</TableCell>
              <TableCell align="center" sx={{color: '#5D7593'}}>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.period}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row" sx={{color: '#FFFFFF'}}>
                  {row.period}
                </TableCell>
                <TableCell align="center" sx={getColor(row.number)}>{row.number}</TableCell>
                <TableCell align="center" sx={{color: '#FFFFFF'}}>{row.big_small}</TableCell>
                <TableCell align="center" sx={getColor(row.number)}>{row.Result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  const howToPlay = (
    <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={howToPlayOpen}
        onClose={() => setHowToPlayOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="soft"
          sx={{
            maxWidth: 400,
            borderRadius: 'xl',
            // p: 3,
            // boxShadow: 'lg',
            overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
            backgroundColor: '#1B263B',
            pb: 3
          }}
        >
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor='#FFFFFF'
            sx={{ fontWeight: 'lg', mb: 2, background: "#3EC5FF", textAlign: 'center', width: '100%', py: 1 }}
          >
            How to Play
          </Typography>
          <Typography id="modal-desc" textColor="#5D7593"
          sx={{ px: 2, mt: 2}}>
          1 minutes 1 issue, 45 seconds to order, 15 seconds waiting for the draw. It opens all day. The total number of trade is 1440 issues.
          </Typography>
          <Typography id="modal-desc" textColor="#5D7593"
          sx={{ px: 2, pt:1}}>
          If you spend 100 to trade, after deducting 2 service fee, your contract amount is 98:
          </Typography>
          <Typography id="modal-desc" textColor="#5D7593"
          sx={{ px: 2, pt:1}}>
          green: if the result shows 1,3,7,9 you will get (98*2) 196;If the result shows 5, you will get (98*1.5) 147
          </Typography>
          <Typography id="modal-desc" textColor="#5D7593"
          sx={{ px: 2, pt:1}}>
          red: if the result shows 2,4,6,8 you will get (98*2) 196;If the result shows 0, you will get (98*1.5) 147
          </Typography>
          <Typography id="modal-desc" textColor="#5D7593"
          sx={{ px: 2, pt:1}}>
          red: if the result shows 2,4,6,8 you will get (98*2) 196;If the result shows 0, you will get (98*1.5) 147
          </Typography>
          <Typography id="modal-desc" textColor="#5D7593"
          sx={{ px: 2, pt:1, mb:3}}>
          1 minutes 1 issue, 45 seconds to order, 15 seconds waiting for the draw. It opens all day. The total number of trade is 1440 issues.
          </Typography>
          <Button onClick={()=>{
            setHowToPlayOpen(false);
          }}
          sx={{width: '75%', textAlign: 'center', 
            background: '#3EC5FF'}}
          >
            Close
          </Button>
        </Sheet>
      </Modal>
  );

  return (
    <div className="p-1">
      {availableBalanceSection}
      {gameOptionsSection}
      {timerSection}
      {betSection}
      {gameHistory}
      {howToPlay}
    </div>
  );
}

export default gamePage;
