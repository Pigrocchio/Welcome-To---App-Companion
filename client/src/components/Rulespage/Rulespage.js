import React from 'react';
import { Container } from 'react-bootstrap';

import './Rulespage.css'

// Icon Images
import IconFences from '../Card/CardImage/IconFences.png'
import IconRealEstate from '../Card/CardImage/IconMarket.png'
import IconPark from "../Card/CardImage/IconPark.png";
import IconSwimm from "../Card/CardImage/IconSwimm.png";
import IconWork from "../Card/CardImage/IconWork.png";
import IconBis from "../Card/CardImage/IconBIS.png";
import GoalCard from "../Card/CardImage/goalcitycard.jpg";


export default function RulesPage() {
    return (
      <>
        <Container>
          <br></br>
          <p className="bg-gradient ">
            <b>Welcome To..</b>. plays like a <b>roll-and-write dice game</b> in
            which you mark results on a score-sheet...but without dice.
          </p>
          <p>
            Instead you flip cards from three piles to make three different
            action sets with both a house number and a corresponding action from
            which everyone chooses one. You use the number to fill in a house on
            your street in numerical order.
          </p>
          <p>
            Then you take the action to increase the point value of estates you
            build or score points at the end for building parks and pools.
            Players also have the option of taking actions to alter or duplicate
            their house numbers.
          </p>

          <p>
            <strong>Effects Reference Sheet</strong>
          </p>
          <p>
            <em>
              Note: Performing the Effect is always Optional; House numbers must
              ascend from left to right
            </em>
          </p>
          <p>
            <strong>
              Surveyor <img className="IconSmall" src={IconFences} /> – Creates
              Estates to meet City Plan goals
            </strong>
          </p>
          <ul>
            <li>Write house number on any available house</li>
            <li>
              Add fence between any two houses on <em>any</em> street
            </li>
          </ul>
          <p>o Doesn’t need to be adjacent to address just played</p>
          <p>o Doesn’t require addresses on any side</p>
          <ul>
            <li>
              Fences already exist at end of each street for purposes of
              creating estates
            </li>
          </ul>
          <p>
            <strong>
              Real Estate Agent{" "}
              <img className="IconSmall" src={IconRealEstate} /> – Increases
              Estate Value
            </strong>
          </p>
          <ul>
            <li>Write house number on any available house</li>
            <li>
              Chose any column and cross off top-most, lowest-numbered space
            </li>
            <li>
              Scoring: Multiply estates of each size X lowest unchecked number
            </li>
          </ul>
          <p>
            <strong>
              Landscaper <img className="IconSmall" src={IconPark} /> –
              Increases Value of Street
            </strong>
          </p>
          <ul>
            <li>Write house number on any available house</li>
            <li>
              Cross off left most Park number on <em>same street</em> address
              was added
            </li>
          </ul>
          <p>
            <strong>
              Pool Manufacturer <img className="IconSmall" src={IconSwimm} /> –
              Increases Value of House with Planned Pools
            </strong>
          </p>
          <ul>
            <li>
              Write house number on any available house{" "}
              <em>with a planned pool</em>
            </li>
            <li>Cross off top-most, lowest-numbered box.</li>
          </ul>
          <p>
            <strong>
              Temp Agency <img className="IconSmall" src={IconWork} /> – Allows
              adjustment to House Number
            </strong>
          </p>
          <ul>
            <li>
              Write house number on any available house; but allowed to
              increase/decrease number by 0, 1, 2
            </li>
            <li>
              Each time using Temp Agency cross off box from orange column
            </li>
            <li>
              Game end scoring: Player with <em>most</em> crossed off boxes
              earns 7 VPs, then 4, then 1 (friendly ties)
            </li>
          </ul>
          <p>
            o If two+ players tie for first both get 7; next player(s) gets 4,
            etc.
          </p>
          <p>o Must cross off at least one box to earn points</p>
          <ul>
            <li>
              Remember: Adjustment of 0 still allows you to cross off box if
              using Temp Agency
            </li>
          </ul>
          <p>
            <strong>
              Bis <img className="IconSmall" src={IconBis} /> – Allows for
              Duplicate Numbers Side-by-Side
            </strong>
          </p>
          <ul>
            <li>Write house number on any available house</li>
            <li>
              Write in <em>an additional</em> number that duplicates an already
              existing house number (left or right side)
            </li>
          </ul>
          <p>
            o Second number doesn’t need to match first number from combination
          </p>
          <p>
            o Duplicate numbers <em>can NOT</em> be separated by fences
          </p>
          <p>
            o Write <em>Bis</em> alongside new number; House number can be
            duplicated multiple times
          </p>
          <p>§ i.e., 4, 5bis, 5, 5bis, 7</p>
          <ul>
            <li>
              Cross off top-most, lowest-numbered box; These are{" "}
              <em>negative</em>
              points
            </li>
          </ul>
          <p>
            <strong>Can’t Make a Legal Play? – Building Permit Refusal</strong>
            (Cross off lowest number in Red 0/0/3/5 box); These are{" "}
            <em>negative</em>
            points
          </p>
          <p>
            <strong>City Plans (Goal Cards)</strong>{" "}
            <img className="IconSmall" src={GoalCard} />
          </p>

          <ul>
            <li>
              Once a City Plan card has been achieved, Player marks highest
              value VPs, then flips card
            </li>
            <li>
              First player to claim a City Plan has option to reshuffle deck if
              desired
            </li>
            <li>
              All other players can gain secondary points for any future claims
              of that achievement
            </li>
            <li>
              Mark off fulfilled estates by filling in fences <em>above</em>{" "}
              that estate to indicate it has been used
            </li>
          </ul>
          <p>
            o Any part of an estate marked off/claimed <em>can NOT</em> be used
            to claim any other city plan
          </p>
          <p>
            § Exception: A pool used in a city plan does not invalidate its
            corresponding house for another plan
          </p>
          <p>o Any estate marked off/claimed can’t be sub-divided again</p>
          <p>
            <strong></strong>
          </p>
          <p>
            <strong>Game End – </strong>1 - Player fills in every house; 2 -
            Player completes all 3 City Plans; 3 - Player has 3 Building Permit
            Refusals.
          </p>

          <a
            href="https://boardgamegeek.com/boardgame/233867/welcome"
            className="btn btn-danger"
          >
            More on Welcome To Game
          </a>
        </Container>
      </>
    );

}


