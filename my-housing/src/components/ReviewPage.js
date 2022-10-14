import './ReviewPage.css';
import NavBarComp from './NavBarComp';
import background from "./assets/apt.png";
import ForumComp from './ForumComp';

function ReviewPage() {
    return (
        <div className="ReviewPage">
            <NavBarComp />
            <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
                <div
                    class="relative z-50 p-5 text-5xl text-white"
                >
                    Share Your Experiences
                </div>
                <img alt="bg" src={background} className="absolute z-10 w-auto min-w-full min-h-full max-w-none blur-sm">
                </img>
            </header>
            <body>
                <div class="relative flex items-center justify-center p-10">
                    <div class="absolute w-50">
                        <input type="text" placeholder="Search" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10" />
                    </div>
                </div>
                <div class="container">
                    <ForumComp />
                </div>
            </body>
        </div>
    );
}

export default ReviewPage;

/*
<ul class="cards">
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 1</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r1" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 2</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r2" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 3</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r3" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 4</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r4" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 5</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r5" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 6</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r6" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 7</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r7" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 8</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r8" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 9</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r9" class="card-link">Reply</a>
                            </div>
                        </li>
                        <li class="card">
                            <div>
                                <h3 class="card-title">Review 10</h3>
                                <div class="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div class="card-link-wrapper">
                                <a href="#r10" class="card-link">Reply</a>
                            </div>
                        </li>
                    </ul>
*/