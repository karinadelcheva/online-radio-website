/*global Mixcloud*/

import { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtistsList from './components/artists/ArtistsList';
import Dashboard from './components/dashboard/Dashboard';
import FeaturedMix from './components/featured-mix/Featured';
import Header from './components/header/Header';
import ShowsList from './components/shows/ShowsList';

interface AppState  {
  playing: boolean,
  currentMix: string
}
class App extends Component<{}, AppState> {
  player: any = undefined;
  widget: any = undefined;

  constructor(props: any) {
    super(props);
    this.state = {
      playing: false,
      currentMix: ''
    };
  }

  mountAudio = async () => {
    // when we use the this keyword, our widget is
    // now accessible anywhere inside the component
    this.widget = Mixcloud.PlayerWidget(this.player)
    // here we wait for our widget to be ready before continuing
    await this.widget.ready
    this.widget.events.pause.on(() =>
      this.setState({
        playing: false,
      })
    );
    this.widget.events.play.on(() =>
      this.setState({
        playing: true,
      })
    )
  }

  playMix = (mixName: string )=> {
    // set our currently playing mix in the state
    this.setState({
      currentMix: mixName,
    })
    // the true tells it to start playing
    this.widget.load(mixName, true)
  }

  componentDidMount() {
    // when our app component is fully loaded onto the page
    // our componentDidMount gets called and we can be sure
    // everything is ready, so we then run our mountAudio()
    // method
    this.mountAudio();
  }

  render() {

    return (
      <div>
        <div className="flex-l justify-end">
          <FeaturedMix />
          <button>{ this.state.playing ? 'Pause' : 'Play'}</button>
          <div className="w-50-l relative z-1 fl w-50">
            <Header />
            <Routes >
              <Route path="/" element={<Dashboard />} />
              <Route path="/artists" element={<ArtistsList />} />
              <Route path="/shows" element={<ShowsList />} />
            </Routes>
          </div>
          <iframe
            ref={player => (this.player = player)}
            title='player'
            width="100%"
            height="60"
            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
            frameBorder="0"
            className="db fixed bottom-0 z-5"
          />
        </div>
      </div>
    );
  }
}

export default App;
