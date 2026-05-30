<!-- CSS 3D guitar — adapted from codepen.io/ShadowShahriar/pen/wvWLeWr -->
<!-- Leaning against the right wall, past the sticky notes.              -->
<div class="guitar-room">
  <div class="g-scene">
    <div class="object3d default-variables">
      <div class="main-stage" t3d>
        <div class="angle-guy z-handle" t3d>
          <div class="main-rect" t3d ant pr-ant>
            <div class="angle-guy x-handle" t3d>
              <div class="angle-guy y-handle guitar" t3d ant pr-ant>
                <!-- Body slices (36 layers give the 3D depth) -->
                <div class="guitar-base nest" t3dc t3dp ant pr-ant>
                  {#each { length: 36 } as _, i}
                    <div style="--i:{i}"></div>
                  {/each}
                </div>

                <!-- Body details: sound hole, pockets, strings, head -->
                <div class="guitar-base-contents" t3d t3dc t3dp ant pr-ant>
                  <div class="neck-intersection reusable-rect">
                    <div class="sides side1"></div>
                    <div class="sides side2"></div>
                    <div class="sides side3"></div>
                  </div>

                  <div class="sound-hole"></div>
                  <div class="sound-hole-borders"></div>

                  <div class="pocket nest">
                    {#each { length: 3 } as _, i}
                      <div style="--i:{i}"></div>
                    {/each}
                  </div>
                  <div class="pocket pocketup nest">
                    {#each { length: 3 } as _, i}
                      <div style="--i:{i}"></div>
                    {/each}
                  </div>

                  <div class="string-pocket" t3d>
                    <div class="head-wrap">
                      <div class="reusable-rect p1">
                        <div class="sides side1"></div>
                        <div class="sides side2"></div>
                      </div>
                      <div class="reusable-rect">
                        <div class="sides side1"></div>
                        <div class="sides side2"></div>
                      </div>
                      <div class="reusable-rect p2">
                        <div class="sides side1"></div>
                        <div class="sides side2"></div>
                      </div>
                      <div class="reusable-rect cs p1">
                        <div class="sides side1"></div>
                        <div class="sides side2"></div>
                      </div>
                      <div class="reusable-rect cs">
                        <div class="sides side1"></div>
                        <div class="sides side2"></div>
                      </div>
                      <div class="reusable-rect cs p2">
                        <div class="sides side1"></div>
                        <div class="sides side2"></div>
                      </div>

                      <div class="strings-tied">
                        <div class="tie tie1"></div>
                        <div class="tie tie2"></div>
                      </div>

                      <div class="head-back">
                        {#each { length: 3 } as _}
                          <div class="sector">
                            <div class="reusable-rect">
                              <div class="sides side1"></div>
                              <div class="sides side2"></div>
                            </div>
                          </div>
                        {/each}
                      </div>
                    </div>

                    <!-- 6 strings -->
                    <div class="string-wrap" t3d>
                      {#each { length: 6 } as _}
                        <div class="reusable-rect">
                          <div class="sides side1"></div>
                          <div class="sides side2"></div>
                        </div>
                      {/each}
                    </div>
                  </div>

                  <!-- String bridge knot -->
                  <div class="string-knot pocket" t3d>
                    <div class="circ c0"><div></div></div>
                    <div class="circ c1"><div></div></div>
                    <div class="circ c2"><div></div></div>
                    <div class="circ c22 cs"><div></div></div>
                    <div class="circ c11 cs"><div></div></div>
                    <div class="circ c3 cs"><div></div></div>
                    <div class="reusable-rect knot-stretch">
                      <div class="sides side1"></div>
                      <div class="sides side2"></div>
                    </div>
                  </div>
                </div>

                <!-- Neck + head -->
                <div class="wrap" t3d>
                  <div class="guitar-neck nest" t3dc t3dp>
                    <div class="sides-tb"></div>
                    <div class="sides-rl"></div>
                  </div>
                  <div class="guitar-neck-mask"></div>
                  <div class="guitar-head nest" t3dc t3dp>
                    {#each { length: 9 } as _, i}
                      <div style="--i:{i}"></div>
                    {/each}
                  </div>
                  <div class="reusable-rect head-knot">
                    <div class="sides side1"></div>
                    <div class="sides side2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .guitar-room {
    position: absolute;
    top: 31rem;
    left: 119rem;
    z-index: 2;
    pointer-events: none;
    /* Guitar leaning face-forward against the right wall, tilted right */
    --z: 1; /* pronounced rightward lean, like propped on a wall */
    --y: 17; /* small Y so body faces viewer, hints of 3D depth   */
    --x: -14; /* top leans back toward wall                        */
    --xx: 18deg; /* flat camera — room is a diorama, not top-down     */
    /* cos(-18°) ≈ 0.951, cos(12°) ≈ 0.978 */
    --cos: 0.951;
    --cos2: 0.978;
    --p: 1400px;
    --tx: 0px;
    --ty: 0px;
    --tz: -300px;
    /* Tuning peg bar thickness — large enough to read at 0.45 scale */
    --head-config-cube-size: 22px;
  }

  /* Scale the entire 3D scene to fit the room's coordinate space */
  .g-scene {
    width: 246px;
    overflow: visible;
    transform: scale(0.45);
    transform-origin: top left;
  }

  /* The CodePen floor shadow doesn't suit a room wall — hide it */
  .g-scene :global(.main-stage > .angle-guy::before) {
    display: none;
  }
  /* Bridge circ elements project as a stray dot at this scale — hide */
  .g-scene :global(.string-knot) {
    display: none;
  }
  /* Neck-intersection can project oddly at flat camera angles */
  .g-scene :global(.neck-intersection) {
    display: none;
  }
  /* Tiny 4px knot rectangle at neck-head joint projects above guitar */
  .g-scene :global(.head-knot) {
    display: none;
  }

  /* Tuning pegs — un-hide head-back and position it on the back face of the
     peghead. The 3 sector bars, at --head-config-cube-size depth, render their
     side faces through the 12-deg Y rotation as 6 visible peg blocks. */
  .g-scene :global(.head-back) {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    /* head-thickness(-18px) - string-distance/2(-5.5px) = -23.5px */
    transform: translateZ(-23.5px);
  }
</style>
