// ===== 算法数据定义 =====

const algorithms = {
    // ===== 排序 =====
    sorting: [
        {
            id: 'bubble',
            name: '冒泡排序',
            nameEn: 'Bubble Sort',
            desc: '通过相邻元素的比较和交换，逐步将最大/最小值冒泡到序列一端',
            complexity: { best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>冒泡排序是最简单的排序算法之一，它重复地遍历要排序的数组，比较相邻的两个元素，如果它们的顺序错误就交换它们。</p>
                    <p>遍历数组的过程中，最大的元素会像气泡一样逐渐"浮"到数组的末端，因此得名"冒泡排序"。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从数组的第一个元素开始，比较相邻的两个元素</li>
                        <li>如果前一个元素大于后一个元素，就交换它们</li>
                        <li>对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对</li>
                        <li>针对所有的元素重复以上步骤，除了最后一个</li>
                        <li>持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较</li>
                    </ul>
                </div>
                <div class="theory-section">
                    <h3>关键特点</h3>
                    <div class="key-point">
                        <strong>稳定性</strong>：冒泡排序是稳定的排序算法，相同元素的相对位置不会改变。<br>
                        <strong>适用场景</strong>：适合小规模数据或基本有序的数据。
                    </div>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BubbleSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        <span class="code-keyword">for</span> j ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-i-<span class="code-number">2</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">            <span class="code-keyword">if</span> arr[j] > arr[j+<span class="code-number">1</span>] <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">                swap(arr[j], arr[j+<span class="code-number">1</span>])</span>',
                '<span class="code-line" data-line="6">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="9"><span class="code-keyword">end procedure</span></span>'
            ],
            python: `<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bubble_sort</span>(arr):</span>
<span class="code-line">    <span class="code-string">"""冒泡排序"""</span></span>
<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>
<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>
<span class="code-line">        swapped = <span class="code-keyword">False</span></span>
<span class="code-line">        <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(n - i - <span class="code-number">1</span>):</span>
<span class="code-line">            <span class="code-keyword">if</span> arr[j] > arr[j + <span class="code-number">1</span>]:</span>
<span class="code-line">                arr[j], arr[j + <span class="code-number">1</span>] = arr[j + <span class="code-number">1</span>], arr[j]</span>
<span class="code-line">                swapped = <span class="code-keyword">True</span></span>
<span class="code-line">        <span class="code-keyword">if</span> <span class="code-keyword">not</span> swapped:</span>
<span class="code-line">            <span class="code-keyword">break</span></span>
<span class="code-line">    <span class="code-keyword">return</span> arr</span>`,
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                steps.push({ type: 'init', array: [...a], line: 3, message: `n = len(arr) = ${n}` });
                for (let i = 0; i < n - 1; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 4, message: `外层循环: i = ${i}` });
                    let swapped = false;
                    steps.push({ type: 'code-line', array: [...a], line: 5, message: `swapped = False` });
                    for (let j = 0; j < n - i - 1; j++) {
                        steps.push({ type: 'loop-start', indices: [j, j+1], array: [...a], line: 6, message: `内层循环: j = ${j}` });
                        steps.push({ type: 'compare', indices: [j, j + 1], array: [...a], line: 7, message: `比较 arr[${j}]=${a[j]} 和 arr[${j+1}]=${a[j+1]}` });
                        if (a[j] > a[j + 1]) {
                            [a[j], a[j + 1]] = [a[j + 1], a[j]];
                            swapped = true;
                            steps.push({ type: 'swap', indices: [j, j + 1], array: [...a], line: 8, message: `交换 ${a[j]} 和 ${a[j+1]}` });
                            steps.push({ type: 'code-line', array: [...a], line: 9, message: `swapped = True` });
                        }
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: 6, message: `内层循环结束` });
                    steps.push({ type: 'sorted', index: n - i - 1, array: [...a], line: 10, message: `检查 swapped` });
                    if (!swapped) {
                        steps.push({ type: 'code-line', array: [...a], line: 11, message: `提前结束: 没有交换` });
                        break;
                    }
                    steps.push({ type: 'sorted', index: n - i - 1, array: [...a], line: 4, message: `位置 ${n-i-1} 已排序` });
                }
                steps.push({ type: 'loop-end', array: [...a], line: 4, message: '外层循环结束' });
                steps.push({ type: 'complete', array: [...a], line: 12, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'selection',
            name: '选择排序',
            nameEn: 'Selection Sort',
            desc: '每次从未排序区间选择最小/最大元素放到已排序序列末尾',
            complexity: { best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>选择排序的工作原理是：第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，然后再从剩余的未排序元素中寻找到最小（大）元素，放到已排序的末尾。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置</li>
                        <li>再从剩余未排序元素中继续寻找最小（大）元素，放到已排序序列的末尾</li>
                        <li>重复第二步，直到所有元素均排序完毕</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">SelectionSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-<span class="code-number">2</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        min_idx ← i</span>',
                '<span class="code-line" data-line="4">        <span class="code-keyword">for</span> j ← i+<span class="code-number">1</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="5">            <span class="code-keyword">if</span> arr[j] < arr[min_idx] <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="6">                min_idx ← j</span>',
                '<span class="code-line" data-line="7">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="8">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="9">        swap(arr[i], arr[min_idx])</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">selection_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""选择排序"""</span></span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n - <span class="code-number">1</span>):</span>',
                '<span class="code-line">        min_idx = i</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(i + <span class="code-number">1</span>, n):</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> arr[j] < arr[min_idx]:</span>',
                '<span class="code-line">                min_idx = j</span>',
                '<span class="code-line">        arr[i], arr[min_idx] = arr[min_idx], arr[i]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                steps.push({ type: 'init', array: [...a], line: 3, message: `n = len(arr) = ${n}` });
                for (let i = 0; i < n - 1; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 4, message: `外层循环: i = ${i}` });
                    let minIdx = i;
                    steps.push({ type: 'code-line', indices: [i], array: [...a], line: 5, message: `min_idx = ${i}` });
                    for (let j = i + 1; j < n; j++) {
                        steps.push({ type: 'loop-start', indices: [j], array: [...a], line: 6, message: `内层循环: j = ${j}` });
                        steps.push({ type: 'compare', indices: [minIdx, j], array: [...a], line: 7, message: `比较 arr[${j}]=${a[j]} 和 arr[min_idx]=${a[minIdx]}` });
                        if (a[j] < a[minIdx]) {
                            minIdx = j;
                            steps.push({ type: 'code-line', indices: [j], array: [...a], line: 8, message: `更新 min_idx = ${j}` });
                        }
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: 6, message: '内层循环结束' });
                    if (minIdx !== i) {
                        [a[i], a[minIdx]] = [a[minIdx], a[i]];
                        steps.push({ type: 'swap', indices: [i, minIdx], array: [...a], line: 9, message: `交换 arr[${i}]=${a[minIdx]} 和 arr[${minIdx}]=${a[i]}` });
                    }
                    steps.push({ type: 'sorted', index: i, array: [...a], line: 9, message: `位置 ${i} 已排序` });
                }
                steps.push({ type: 'loop-end', array: [...a], line: 4, message: '外层循环结束' });
                steps.push({ type: 'complete', array: [...a], line: 10, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'insertion',
            name: '插入排序',
            nameEn: 'Insertion Sort',
            desc: '将元素插入到已排序序列中的正确位置，像整理扑克牌一样',
            complexity: { best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>插入排序的工作方式像整理手中的扑克牌。将每一张牌插入到已经排好序的牌中的适当位置，直到所有牌都整理好。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从第一个元素开始，该元素可以认为已经被排序</li>
                        <li>取出下一个元素，在已经排序的元素序列中从后向前扫描</li>
                        <li>如果该元素（已排序）大于新元素，将该元素移到下一位置</li>
                        <li>重复步骤3，直到找到已排序的元素小于或等于新元素的位置</li>
                        <li>将新元素插入到该位置后</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">InsertionSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">1</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        key ← arr[i]</span>',
                '<span class="code-line" data-line="4">        j ← i - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">while</span> j ≥ <span class="code-number">0</span> <span class="code-keyword">and</span> arr[j] > key <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="6">            arr[j+<span class="code-number">1</span>] ← arr[j]</span>',
                '<span class="code-line" data-line="7">            j ← j - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="8">        <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="9">        arr[j+<span class="code-number">1</span>] ← key</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">insertion_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""插入排序"""</span></span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-number">1</span>, n):</span>',
                '<span class="code-line">        key = arr[i]</span>',
                '<span class="code-line">        j = i - <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">while</span> j >= <span class="code-number">0</span> <span class="code-keyword">and</span> arr[j] > key:</span>',
                '<span class="code-line">            arr[j + <span class="code-number">1</span>] = arr[j]</span>',
                '<span class="code-line">            j -= <span class="code-number">1</span></span>',
                '<span class="code-line">        arr[j + <span class="code-number">1</span>] = key</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                steps.push({ type: 'sorted', index: 0, array: [...a], line: 3, message: '初始状态' });
                for (let i = 1; i < n; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 4, message: `开始处理第 ${i} 个元素` });
                    const key = a[i];
                    steps.push({ type: 'code-line', indices: [i], array: [...a], line: 5, message: `key = arr[${i}] = ${key}` });
                    let j = i - 1;
                    steps.push({ type: 'code-line', indices: [j], array: [...a], line: 6, message: `j = ${j}` });
                    while (j >= 0 && a[j] > key) {
                        steps.push({ type: 'compare', indices: [j, j + 1], array: [...a], line: 7, message: `while条件: arr[${j}]=${a[j]} > key=${key}` });
                        a[j + 1] = a[j];
                        steps.push({ type: 'shift', index: j + 1, array: [...a], line: 8, message: `移动 arr[${j}]=${a[j]} 到位置 ${j+1}` });
                        j--;
                        if (j >= 0) {
                            steps.push({ type: 'code-line', indices: [j], array: [...a], line: 9, message: `j = ${j}` });
                        }
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: 7, message: 'while循环结束' });
                    a[j + 1] = key;
                    steps.push({ type: 'insert', index: j + 1, array: [...a], line: 10, message: `插入 key=${key} 到位置 ${j+1}` });
                    steps.push({ type: 'sorted', index: i, array: [...a], line: 4, message: `前 ${i+1} 个元素已排序` });
                }
                steps.push({ type: 'loop-end', array: [...a], line: 4, message: 'for循环结束' });
                steps.push({ type: 'complete', array: [...a], line: 11, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'quick',
            name: '快速排序',
            nameEn: 'Quick Sort',
            desc: '选择枢轴元素，将数组分区，递归排序子数组',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>快速排序采用分治策略，通过一趟排序将数据分成两部分，其中一部分的所有数据都比另一部分的所有数据小，然后再按此方法对这两部分数据分别进行快速排序。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从数列中挑出一个元素，称为"枢轴"(pivot)</li>
                        <li>分区：把所有比枢轴小的元素放在它左边，比它大的放在右边</li>
                        <li>递归地对左右两个分区进行同样的操作</li>
                        <li>递归的终止条件是分区的大小是零或一</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">QuickSort</span>(arr, low, high)</span>',
                '<span class="code-line" data-line="1">    <span class="code-keyword">if</span> low < high <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="2">        pivot_idx ← Partition(arr, low, high)</span>',
                '<span class="code-line" data-line="3">        QuickSort(arr, low, pivot_idx-<span class="code-number">1</span>)</span>',
                '<span class="code-line" data-line="4">        QuickSort(arr, pivot_idx+<span class="code-number">1</span>, high)</span>',
                '<span class="code-line" data-line="5">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="6"><span class="code-keyword">end procedure</span></span>',
                '<span class="code-line" data-line="7"></span>',
                '<span class="code-line" data-line="8"><span class="code-keyword">procedure</span> <span class="code-function">Partition</span>(arr, low, high)</span>',
                '<span class="code-line" data-line="9">    pivot ← arr[high]</span>',
                '<span class="code-line" data-line="10">    i ← low - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="11">    <span class="code-keyword">for</span> j ← low <span class="code-keyword">to</span> high-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="12">        <span class="code-keyword">if</span> arr[j] ≤ pivot <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="13">            i ← i + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="14">            swap(arr[i], arr[j])</span>',
                '<span class="code-line" data-line="15">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="16">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="17">    swap(arr[i+<span class="code-number">1</span>], arr[high])</span>',
                '<span class="code-line" data-line="18">    <span class="code-keyword">return</span> i + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="19"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">quick_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""快速排序"""</span></span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-function">len</span>(arr) <= <span class="code-number">1</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> arr</span>',
                '<span class="code-line">    pivot = arr[<span class="code-function">len</span>(arr) // <span class="code-number">2</span>]</span>',
                '<span class="code-line">    left = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> arr <span class="code-keyword">if</span> x < pivot]</span>',
                '<span class="code-line">    middle = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> arr <span class="code-keyword">if</span> x == pivot]</span>',
                '<span class="code-line">    right = [x <span class="code-keyword">for</span> x <span class="code-keyword">in</span> arr <span class="code-keyword">if</span> x > pivot]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> quick_sort(left) + middle + quick_sort(right)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                steps.push({ type: 'init', array: [...a], line: 1, message: '快速排序演示' });
                steps.push({ type: 'code-line', array: [...a], line: 3, message: `检查数组长度: len(arr) = ${a.length}` });
                if (a.length <= 1) {
                    steps.push({ type: 'complete', array: [...a], line: 4, message: '数组长度为1，无需排序' });
                    return steps;
                }
                const pivot = a[Math.floor(a.length / 2)];
                steps.push({ type: 'pivot', array: [...a], line: 5, message: `选择枢轴: pivot = ${pivot}` });
                // 模拟分区过程
                const left = a.filter(x => x < pivot);
                const middle = a.filter(x => x === pivot);
                const right = a.filter(x => x > pivot);
                steps.push({ type: 'code-line', array: [...a], line: 6, message: `left = [${left.join(', ')}]` });
                steps.push({ type: 'code-line', array: [...a], line: 7, message: `middle = [${middle.join(', ')}]` });
                steps.push({ type: 'code-line', array: [...a], line: 8, message: `right = [${right.join(', ')}]` });
                steps.push({ type: 'sorted', indices: left.map((_, i) => i), array: [...a], line: 9, message: `递归排序 left` });
                steps.push({ type: 'sorted', indices: middle.map((_, i) => left.length + i), array: [...a], line: 9, message: `middle 保持不变` });
                steps.push({ type: 'sorted', indices: right.map((_, i) => left.length + middle.length + i), array: [...a], line: 9, message: `递归排序 right` });
                steps.push({ type: 'complete', array: [...left, ...middle, ...right], line: 9, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'merge',
            name: '归并排序',
            nameEn: 'Merge Sort',
            desc: '分治策略，将数组分成子数组，排序后合并',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>归并排序采用分治法，将数组分成若干个子数组，每个子数组是有序的，然后再将子数组合并成一个有序数组。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>Divide：将数组从中间分成左右两部分</li>
                        <li>Conquer：递归地对左右两部分进行排序</li>
                        <li>Merge：将排序好的两部分合并成一个大数组</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">MergeSort</span>(arr, left, right)</span>',
                '<span class="code-line" data-line="1">    <span class="code-keyword">if</span> left < right <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="2">        mid ← (left + right) / <span class="code-number">2</span></span>',
                '<span class="code-line" data-line="3">        MergeSort(arr, left, mid)</span>',
                '<span class="code-line" data-line="4">        MergeSort(arr, mid+<span class="code-number">1</span>, right)</span>',
                '<span class="code-line" data-line="5">        Merge(arr, left, mid, right)</span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">merge_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""归并排序"""</span></span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-function">len</span>(arr) <= <span class="code-number">1</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> arr</span>',
                '<span class="code-line">    mid = <span class="code-function">len</span>(arr) // <span class="code-number">2</span></span>',
                '<span class="code-line">    left = merge_sort(arr[:mid])</span>',
                '<span class="code-line">    right = merge_sort(arr[mid:])</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> merge(left, right)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                function mergeSort(arr, left, right) {
                    steps.push({ type: 'code-line', array: [...a], line: 3, message: `检查长度: len(arr) = ${right - left + 1}` });
                    if (right - left + 1 <= 1) {
                        steps.push({ type: 'code-line', array: [...a], line: 4, message: '长度<=1, 返回' });
                        return;
                    }
                    const mid = Math.floor((left + right) / 2);
                    steps.push({ type: 'divide', indices: [left, mid, right], array: [...a], line: 5, message: `mid = ${mid}` });
                    steps.push({ type: 'code-line', range: [left, mid], array: [...a], line: 6, message: `递归左半部分 [${left}..${mid}]` });
                    mergeSort(arr, left, mid);
                    steps.push({ type: 'code-line', range: [mid+1, right], array: [...a], line: 7, message: `递归右半部分 [${mid+1}..${right}]` });
                    mergeSort(arr, mid + 1, right);
                    steps.push({ type: 'code-line', array: [...a], line: 8, message: `合并 [${left}..${right}]` });
                    // 简化合并过程可视化
                    steps.push({ type: 'merge', indices: [left, right], array: [...a], line: 8, message: `合并完成` });
                }
                mergeSort(a, 0, a.length - 1);
                steps.push({ type: 'complete', array: [...a], line: 8, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'heap',
            name: '堆排序',
            nameEn: 'Heap Sort',
            desc: '利用堆数据结构设计的排序算法',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>堆排序利用堆这种数据结构进行排序。堆是一个近似完全二叉树的结构，同时满足堆的性质：即子节点的键值总是小于（或大于）它的父节点。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>将数组构建成最大堆</li>
                        <li>将堆顶（最大值）与堆尾交换</li>
                        <li>将堆的大小减1，然后重新调整堆</li>
                        <li>重复步骤2~3，直到堆的大小为1</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">HeapSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-comment"># 构建最大堆</span></span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">for</span> i ← n/<span class="code-number">2</span>-<span class="code-number">1</span> <span class="code-keyword">downto</span> <span class="code-number">0</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        Heapify(arr, n, i)</span>',
                '<span class="code-line" data-line="5">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">for</span> i ← n-<span class="code-number">1</span> <span class="code-keyword">downto</span> <span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="7">        swap(arr[<span class="code-number">0</span>], arr[i])</span>',
                '<span class="code-line" data-line="8">        Heapify(arr, i, <span class="code-number">0</span>)</span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="10"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">heap_sort</span>(arr):</span>',
                '<span class="code-line">    <span class="code-string">"""堆排序"""</span></span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n // <span class="code-number">2</span> - <span class="code-number">1</span>, -<Span class="code-number">1</span>, -<span class="code-number">1</span>):</span>',
                '<span class="code-line">        heapify(arr, n, i)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n - <span class="code-number">1</span>, <span class="code-number">0</span>, -<span class="code-number">1</span>):</span>',
                '<span class="code-line">        arr[<span class="code-number">0</span>], arr[i] = arr[i], arr[<span class="code-number">0</span>]</span>',
                '<span class="code-line">        heapify(arr, i, <span class="code-number">0</span>)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                function heapify(size, i) {
                    let largest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;
                    steps.push({ type: 'code-line', array: [...a], line: 4, message: `heapify(size=${size}, i=${i})` });
                    if (left < size) {
                        steps.push({ type: 'compare', indices: [largest, left], array: [...a], line: 4, message: `比较 ${a[largest]} 和左子 ${a[left]}` });
                        if (a[left] > a[largest]) largest = left;
                    }
                    if (right < size) {
                        steps.push({ type: 'compare', indices: [largest, right], array: [...a], line: 4, message: `比较 ${a[largest]} 和右子 ${a[right]}` });
                        if (a[right] > a[largest]) largest = right;
                    }
                    if (largest !== i) {
                        [a[i], a[largest]] = [a[largest], a[i]];
                        steps.push({ type: 'swap', indices: [i, largest], array: [...a], line: 4, message: `交换 ${a[largest]} 和 ${a[i]}` });
                        heapify(size, largest);
                    }
                }
                steps.push({ type: 'code-line', array: [...a], line: 3, message: `n = len(arr) = ${n}` });
                steps.push({ type: 'message', array: [...a], line: 4, message: '构建最大堆' });
                for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 4, message: `heapify(i=${i})` });
                    heapify(n, i);
                }
                steps.push({ type: 'loop-end', array: [...a], line: 4, message: '构建堆完成' });
                steps.push({ type: 'message', array: [...a], line: 6, message: '开始排序' });
                for (let i = n - 1; i > 0; i--) {
                    [a[0], a[i]] = [a[i], a[0]];
                    steps.push({ type: 'swap', indices: [0, i], array: [...a], line: 7, message: `交换堆顶和位置 ${i}: ${a[i]}` });
                    steps.push({ type: 'sorted', index: i, array: [...a], line: 7, message: `位置 ${i} 已排序` });
                    steps.push({ type: 'code-line', array: [...a], line: 8, message: `heapify(i=${i})` });
                    heapify(i, 0);
                }
                steps.push({ type: 'sorted', index: 0, array: [...a], line: 9, message: '排序完成' });
                steps.push({ type: 'complete', array: [...a], line: 9, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'shell',
            name: '希尔排序',
            nameEn: 'Shell Sort',
            desc: '改进的插入排序，使用增量分组进行排序',
            complexity: { best: 'O(n log n)', avg: 'O(n^1.3)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>希尔排序是插入排序的改进版，通过引入"增量"概念，将数组分成若干子序列分别进行插入排序，随着增量逐渐减小，最后整体进行一次插入排序。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>选择一个增量序列（如 n/2, n/4, ...）</li>
                        <li>根据增量将数组分成若干子序列</li>
                        <li>对每个子序列进行插入排序</li>
                        <li>逐步减小增量，重复上述过程</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">ShellSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    gap ← n / <span class="code-number">2</span></span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> gap > <span class="code-number">0</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        <span class="code-keyword">for</span> i ← gap <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="5">            temp ← arr[i]</span>',
                '<span class="code-line" data-line="6">            j ← i</span>',
                '<span class="code-line" data-line="7">            <span class="code-keyword">while</span> j ≥ gap <span class="code-keyword">and</span> arr[j-gap] > temp <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="8">                arr[j] ← arr[j-gap]</span>',
                '<span class="code-line" data-line="9">                j ← j - gap</span>',
                '<span class="code-line" data-line="10">            <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="11">            arr[j] ← temp</span>',
                '<span class="code-line" data-line="12">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="13">        gap ← gap / <span class="code-number">2</span></span>',
                '<span class="code-line" data-line="14">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="15"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">shell_sort</span>(arr):</span>',
                '<span class="code-line">    n = <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    gap = n // <span class="code-number">2</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> gap > <span class="code-number">0</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(gap, n):</span>',
                '<span class="code-line">            temp = arr[i]</span>',
                '<span class="code-line">            j = i</span>',
                '<span class="code-line">            <span class="code-keyword">while</span> j >= gap <span class="code-keyword">and</span> arr[j-gap] > temp:</span>',
                '<span class="code-line">                arr[j] = arr[j-gap]</span>',
                '<span class="code-line">                j -= gap</span>',
                '<span class="code-line">            arr[j] = temp</span>',
                '<span class="code-line">        gap //= <span class="code-number">2</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const n = a.length;
                let gap = Math.floor(n / 2);
                steps.push({ type: 'code-line', array: [...a], line: 2, message: `n = len(arr) = ${n}` });
                while (gap > 0) {
                    steps.push({ type: 'code-line', array: [...a], line: 3, message: `gap = ${gap}` });
                    steps.push({ type: 'loop-start', array: [...a], line: 4, message: `开始 gap=${gap} 的排序` });
                    for (let i = gap; i < n; i++) {
                        steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 5, message: `i = ${i}` });
                        const temp = a[i];
                        steps.push({ type: 'code-line', indices: [i], array: [...a], line: 6, message: `temp = arr[${i}] = ${temp}` });
                        let j = i;
                        steps.push({ type: 'code-line', indices: [j], array: [...a], line: 7, message: `j = ${j}` });
                        while (j >= gap && a[j - gap] > temp) {
                            steps.push({ type: 'compare', indices: [j, j - gap], array: [...a], line: 8, message: `比较 arr[${j-gap}]=${a[j-gap]} > temp=${temp}` });
                            a[j] = a[j - gap];
                            steps.push({ type: 'shift', index: j, array: [...a], line: 9, message: `移动 arr[${j-gap}] 到位置 ${j}` });
                            j -= gap;
                            if (j >= gap) steps.push({ type: 'code-line', indices: [j], array: [...a], line: 10, message: `j = ${j}` });
                        }
                        steps.push({ type: 'loop-end', array: [...a], line: 8, message: 'while结束' });
                        a[j] = temp;
                        steps.push({ type: 'insert', index: j, array: [...a], line: 11, message: `arr[${j}] = ${temp}` });
                    }
                    steps.push({ type: 'loop-end', array: [...a], line: 5, message: `gap=${gap} 排序完成` });
                    gap = Math.floor(gap / 2);
                    steps.push({ type: 'code-line', array: [...a], line: 12, message: `gap = ${gap}` });
                }
                steps.push({ type: 'loop-end', array: [...a], line: 4, message: '所有gap排序完成' });
                steps.push({ type: 'complete', array: [...a], line: 4, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'counting',
            name: '计数排序',
            nameEn: 'Counting Sort',
            desc: '非比较排序，通过统计元素出现次数进行排序',
            complexity: { best: 'O(n+k)', avg: 'O(n+k)', worst: 'O(n+k)', space: 'O(k)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>计数排序是一种非比较排序算法，通过统计每个元素值出现的次数，然后根据统计结果将元素放到正确的位置。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>找出数组中的最大值和最小值</li>
                        <li>创建计数数组，统计每个值出现的次数</li>
                        <li>对计数数组进行累加</li>
                        <li>根据计数数组将元素放到输出数组的正确位置</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">CountingSort</span>(arr)</span>',
                '<span class="code-line" data-line="1">    max ← max(arr)</span>',
                '<span class="code-line" data-line="2">    min ← min(arr)</span>',
                '<span class="code-line" data-line="3">    range ← max - min + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="4">    count ← array[range] initialized to <span class="code-number">0</span></span>',
                '<span class="code-line" data-line="5">    <span class="code-keyword">for each</span> element <span class="code-keyword">in</span> arr <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="6">        count[element-min] ← count[element-min] + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="7">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">for</span> i ← <span class="code-number">1</span> <span class="code-keyword">to</span> range-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="9">        count[i] ← count[i] + count[i-<span class="code-number">1</span>]</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11">    output ← array of length n</span>',
                '<span class="code-line" data-line="12">    <span class="code-keyword">for</span> i ← n-<span class="code-number">1</span> <span class="code-keyword">downto</span> <span class="code-number">0</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="13">        output[count[arr[i]-min]-<span class="code-number">1</span>] ← arr[i]</span>',
                '<span class="code-line" data-line="14">        count[arr[i]-min] ← count[arr[i]-min] - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="15">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="16">    <span class="code-keyword">return</span> output</span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">counting_sort</span>(arr):</span>',
                '<span class="code-line">    max_val = <span class="code-function">max</span>(arr)</span>',
                '<span class="code-line">    min_val = <span class="code-function">min</span>(arr)</span>',
                '<span class="code-line">    range_ = max_val - min_val + <span class="code-number">1</span></span>',
                '<span class="code-line">    count = [<span class="code-number">0</span>] * range_</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> val <span class="code-keyword">in</span> arr:</span>',
                '<span class="code-line">        count[val - min_val] += <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-number">1</span>, range_):</span>',
                '<span class="code-line">        count[i] += count[i - <span class="code-number">1</span>]</span>',
                '<span class="code-line">    output = [<span class="code-number">0</span>] * <span class="code-function">len</span>(arr)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> val <span class="code-keyword">in</span> <span class="code-function">reversed</span>(arr):</span>',
                '<span class="code-line">        output[count[val - min_val] - <span class="code-number">1</span>] = val</span>',
                '<span class="code-line">        count[val - min_val] -= <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> output</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const max = Math.max(...arr);
                const min = Math.min(...arr);
                const range = max - min + 1;
                let count = new Array(range).fill(0);
                const output = new Array(arr.length);
                
                steps.push({ type: 'code-line', array: [...arr], line: 2, message: `max = ${max}` });
                steps.push({ type: 'code-line', array: [...arr], line: 3, message: `min = ${min}` });
                steps.push({ type: 'code-line', array: [...arr], line: 4, message: `range = ${range}` });
                steps.push({ type: 'code-line', array: [...arr], line: 5, message: `count数组初始化为0` });
                
                for (let i = 0; i < arr.length; i++) {
                    count[arr[i] - min]++;
                    steps.push({ type: 'count', indices: [i], array: [...arr], count: [...count], line: 7, message: `统计 arr[${i}]=${arr[i]}` });
                }
                steps.push({ type: 'loop-end', array: [...arr], count: [...count], line: 7, message: '计数完成' });
                
                for (let i = 1; i < range; i++) {
                    count[i] += count[i - 1];
                    steps.push({ type: 'code-line', array: [...arr], count: [...count], line: 9, message: `累加 count[${i}] = ${count[i]}` });
                }
                steps.push({ type: 'loop-end', array: [...arr], count: [...count], line: 9, message: '累加完成' });
                steps.push({ type: 'code-line', array: [...arr], count: [...count], line: 10, message: '创建output数组' });
                
                for (let i = arr.length - 1; i >= 0; i--) {
                    output[count[arr[i] - min] - 1] = arr[i];
                    count[arr[i] - min]--;
                    steps.push({ type: 'insert', indices: [i], array: [...output], count: [...count], line: 12, message: `放置 ${arr[i]} 到位置 ${count[arr[i]-min]}` });
                    steps.push({ type: 'code-line', indices: [i], array: [...output], count: [...count], line: 13, message: `count[${arr[i]-min}]--` });
                }
                
                steps.push({ type: 'complete', array: [...output], line: 14, message: '排序完成!' });
                return steps;
            }
        },
        {
            id: 'radix-sort',
            name: '基数排序',
            nameEn: 'Radix Sort',
            desc: '按位数逐个排序，从低位到高位或高位到低位',
            complexity: { best: 'O(d(n+r))', avg: 'O(d(n+r))', worst: 'O(d(n+r))', space: 'O(n+r)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>基数排序是一种非比较排序算法，通过按位数分配和收集来完成排序。通常从最低位开始，按每位数字将元素分配到0-9的桶中，然后按顺序收集，再进行下一位。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">from</span> math <span class="code-keyword">import</span> pow</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">radix_sort</span>(arr):</span>',
                '<span class="code-line">    max_val = <span class="code-function">max</span>(arr)</span>',
                '<span class="code-line">    d = <span class="code-function">len</span>(<span class="code-function">str</span>(max_val))</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(d):</span>',
                '<span class="code-line">        buckets = [[] <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-number">10</span>)]</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> num <span class="code-keyword">in</span> arr:</span>',
                '<span class="code-line">            digit = (num // <span class="code-function">int</span>(pow(<span class="code-number">10</span>, i))) % <span class="code-number">10</span></span>',
                '<span class="code-line">            buckets[digit].append(num)</span>',
                '<span class="code-line">        arr = [num <span class="code-keyword">for</span> bucket <span class="code-keyword">in</span> buckets <span class="code-keyword">for</span> num <span class="code-keyword">in</span> bucket]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> arr</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const maxDigits = Math.max(...a.map(x => String(x).length));
                steps.push({ type: 'init', array: [...a], line: 4, message: `max_val = ${Math.max(...a)}` });
                steps.push({ type: 'init', array: [...a], line: 5, message: `最大位数 d=${maxDigits}` });
                
                for (let d = 0; d < maxDigits; d++) {
                    steps.push({ type: 'loop-start', array: [...a], line: 6, message: `第 ${d+1} 位 (10^${d})` });
                    steps.push({ type: 'code-line', array: [...a], line: 7, message: '创建10个桶' });
                    const buckets = Array.from({length: 10}, () => []);
                    
                    for (let i = 0; i < a.length; i++) {
                        const digit = Math.floor(a[i] / Math.pow(10, d)) % 10;
                        steps.push({ type: 'code-line', indices: [i], array: [...a], line: 9, message: `${a[i]} 的第 ${d+1} 位 = ${digit}` });
                        buckets[digit].push(a[i]);
                        steps.push({ type: 'code-line', array: [...a], line: 10, message: `放入桶 ${digit}` });
                    }
                    
                    steps.push({ type: 'code-line', array: [...a], line: 11, message: '收集所有桶' });
                    a.splice(0, a.length, ...buckets.flat());
                    steps.push({ type: 'code-line', array: [...a], line: 6, message: `当前: [${a.join(', ')}]` });
                }
                
                steps.push({ type: 'complete', array: [...a], line: 12, message: '基数排序完成!' });
                return steps;
            }
        },
        {
            id: 'binary-insert',
            name: '折半插入排序',
            nameEn: 'Binary Insertion Sort',
            desc: '在插入时使用二分查找确定位置',
            complexity: { best: 'O(n log n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>折半插入排序是对直接插入排序的改进，在查找插入位置时使用二分查找，减少比较次数。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">binary_insertion</span>(arr):</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-number">1</span>, <span class="code-function">len</span>(arr)):</span>',
                '<span class="code-line">        key = arr[i]</span>',
                '<span class="code-line">        lo, hi = <span class="code-number">0</span>, i - <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">while</span> lo <= hi:</span>',
                '<span class="code-line">            mid = (lo + hi) // <span class="code-number">2</span></span>',
                '<span class="code-line">            <span class="code-keyword">if</span> arr[mid] > key:</span>',
                '<span class="code-line">                hi = mid - <span class="code-number">1</span></span>',
                '<span class="code-line">            <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">                lo = mid + <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(i, lo, -<span class="code-number">1</span>):</span>',
                '<span class="code-line">            arr[j] = arr[j - <span class="code-number">1</span>]</span>',
                '<span class="code-line">        arr[lo] = key</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                steps.push({ type: 'init', array: [...a], line: 0, message: '开始折半插入排序' });
                
                for (let i = 1; i < Math.min(a.length, 6); i++) {
                    const key = a[i];
                    steps.push({ type: 'loop-start', indices: [i], array: [...a], line: 1, message: `插入 arr[${i}]=${key}` });
                    steps.push({ type: 'code-line', indices: [i], array: [...a], line: 2, message: `key = ${key}` });
                    
                    let lo = 0, hi = i - 1;
                    steps.push({ type: 'code-line', array: [...a], line: 3, message: `lo=${lo}, hi=${hi}` });
                    
                    while (lo <= hi) {
                        const mid = Math.floor((lo + hi) / 2);
                        steps.push({ type: 'compare', indices: [mid, i], array: [...a], line: 4, message: `mid=${mid}, arr[${mid}]=${a[mid]} vs key=${key}` });
                        if (a[mid] > key) {
                            hi = mid - 1;
                        } else {
                            lo = mid + 1;
                        }
                        steps.push({ type: 'code-line', array: [...a], line: 5, message: `lo=${lo}, hi=${hi}` });
                    }
                    
                    steps.push({ type: 'code-line', array: [...a], line: 6, message: `插入位置 lo=${lo}` });
                }
                
                steps.push({ type: 'complete', array: [...a], line: 7, message: '折半插入排序完成' });
                return steps;
            }
        }
    ],


    // ===== 线性表 =====
    linear: [
        {
            id: 'array-list',
            name: '顺序表',
            nameEn: 'Array List',
            desc: '使用数组实现的顺序存储结构，支持插入、删除、查找操作',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>存储方式</h3>
                    <p>顺序表使用一段连续的存储单元依次存储数据元素，类似于数组。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">SeqList</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.data = []</span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">insert</span>(self, i, e):</span>',
                '<span class="code-line">        self.data.insert(i, e)</span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">delete</span>(self, i):</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> self.data.pop(i)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '初始化顺序表' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 0, message: `位置 ${i}: ${val}` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 0, message: '顺序表构建完成' });
                return steps;
            }
        },
        {
            id: 'single-linked',
            name: '单链表-带头结点',
            nameEn: 'Singly Linked List',
            desc: '每个节点包含数据和指向下一个节点的指针',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>链表结构</h3>
                    <p>单链表由节点组成，每个节点包含数据域和指针域，指针指向下一个节点。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">Node</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, data):</span>',
                '<span class="code-line">        self.data = data</span>',
                '<span class="code-line">        self.next = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    </span>',
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">LinkList</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.head = Node(<span class="code-number">0</span>)  <span class="code-comment"># 头结点</span></span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">traverse</span>(self):</span>',
                '<span class="code-line">        p = self.head.next</span>',
                '<span class="code-line">        <span class="code-keyword">while</span> p:</span>',
                '<span class="code-line">            <span class="code-function">print</span>(p.data)</span>',
                '<span class="code-line">            p = p.next</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建头结点' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `访问节点 ${i}: ${val}` });
                    if (i < arr.length - 1) {
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `next 指针移动` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '链表遍历完成' });
                return steps;
            }
        },
        {
            id: 'single-linked-no-head',
            name: '单链表-不带头结点',
            nameEn: 'Singly Linked List (No Head)',
            desc: '第一个节点即为数据节点，无虚拟头结点',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>不带头结点的链表</h3>
                    <p>第一个节点就是数据节点，需要特殊处理插入和删除操作。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">LinkListNoHead</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.head = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">insert_head</span>(self, e):</span>',
                '<span class="code-line">        p = Node(e)</span>',
                '<span class="code-line">        p.next = self.head</span>',
                '<span class="code-line">        self.head = p</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: 'head = None' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `创建节点 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `next 指向 head` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `head 移动到新节点` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '头插法完成' });
                return steps;
            }
        },
        {
            id: 'double-linked',
            name: '双链表-带头结点',
            nameEn: 'Doubly Linked List',
            desc: '每个节点包含指向前后两个节点的指针',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>双链表结构</h3>
                    <p>双链表每个节点有前驱和后继两个指针，可以双向遍历。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">DNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, data):</span>',
                '<span class="code-line">        self.data = data</span>',
                '<span class="code-line">        self.prior = <span class="code-keyword">None</span></span>',
                '<span class="code-line">        self.next = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    </span>',
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">DLinkList</span>:</span>',
                '<span class="code-line">    head = DNode(<span class="code-number">0</span>)  <span class="code-comment"># 头结点</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建双链表头结点' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `节点 ${val}: prior + data + next` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 2, message: '双链表构建完成' });
                return steps;
            }
        },
        {
            id: 'circular-single',
            name: '循环单链表',
            nameEn: 'Circular Singly Linked List',
            desc: '尾节点指向头节点，形成环',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>循环链表</h3>
                    <p>循环链表的尾节点指向头节点，形成一个环，可以从任意节点遍历所有节点。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">CircularLinkList</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.tail = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">append</span>(self, e):</span>',
                '<span class="code-line">        p = Node(e)</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> <span class="code-keyword">not</span> self.tail:</span>',
                '<span class="code-line">            p.next = p</span>',
                '<span class="code-line">            self.tail = p</span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            p.next = self.tail.next</span>',
                '<span class="code-line">            self.tail.next = p</span>',
                '<span class="code-line">            self.tail = p</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: 'tail = None' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `创建节点 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `next 指向 tail.next` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `tail.next 指向 p` });
                    steps.push({ type: 'code-line', array: [...arr], line: 4, message: `tail = p` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 5, message: '循环链表构建完成' });
                return steps;
            }
        },
        {
            id: 'circular-double',
            name: '循环双链表',
            nameEn: 'Circular Doubly Linked List',
            desc: '头结点前后指针形成环',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>循环双链表</h3>
                    <p>循环双链表的头结点前驱指向尾结点，尾结点后继指向头结点，形成双向环。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">CircularDLinkList</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.head = DNode(<span class="code-number">0</span>)</span>',
                '<span class="code-line">        self.head.next = self.head</span>',
                '<span class="code-line">        self.head.prior = self.head</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建头结点' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `节点 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `prior 指向 head` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `next 指向 head` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '循环双链表完成' });
                return steps;
            }
        },
        {
            id: 'static-list',
            name: '静态链表',
            nameEn: 'Static Linked List',
            desc: '用数组模拟链表，通过游标连接各节点',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>静态链表</h3>
                    <p>静态链表使用数组存储数据，通过游标（cur）代替指针连接各节点。</p>
                </div>
            `,
            python: [
                '<span class="code-line">MAXSIZE = <span class="code-number">100</span></span>',
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">StaticLinkList</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.space = [{cur: i+<span class="code-number">1</span>} <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(MAXSIZE)]</span>',
                '<span class="code-line">        self.space[MAXSIZE-<span class="code-number">1</span>][<span class="code-string">"cur"</span>] = <span class="code-number">0</span></span>',
                '<span class="code-line">        self.head = <span class="code-number">0</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '初始化静态链表数组' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `节点 ${i}: data=${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `cur 指向下一个空闲位置` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '静态链表构建完成' });
                return steps;
            }
        }
    ],


    // ===== 栈和队列 =====
    'stack-queue': [
        {
            id: 'stack-array',
            name: '栈-顺序表',
            nameEn: 'Stack (Array)',
            desc: '使用数组实现的栈，遵循LIFO原则',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>栈的特点</h3>
                    <p>栈是一种后进先出(LIFO)的数据结构，只允许在栈顶进行插入和删除操作。</p>
                </div>
            `,
            python: [
                'class SqStack:',
                '    def __init__(self):',
                '        self.data = []',
                '        self.top = -1',
                '    def push(self, e):',
                '        self.data.append(e)',
                '        self.top += 1',
                '    def pop(self):',
                '        if self.top >= 0:',
                '            self.top -= 1',
                '            return self.data.pop()'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [], top: -1, line: 1, message: '初始化空栈, top=-1' });
                let stack = [];
                arr.forEach((val, i) => {
                    stack.push(val);
                    steps.push({ type: 'push', array: [...stack], top: stack.length - 1, line: 5, message: `push(${val}) 入栈` });
                    steps.push({ type: 'code-line', array: [...stack], top: stack.length - 1, line: 6, message: `top++` });
                });
                steps.push({ type: 'loop-start', array: [...stack], top: stack.length - 1, line: 8, message: '开始出栈' });
                arr.slice().reverse().forEach((val, i) => {
                    steps.push({ type: 'pop', array: [...stack], top: stack.length - 1, line: 10, message: `top--` });
                    stack.pop();
                    steps.push({ type: 'visit', array: [...stack], top: stack.length - 1, line: 11, message: `pop() = ${val}` });
                });
                steps.push({ type: 'complete', array: [...stack], top: -1, line: 12, message: '栈操作完成' });
                return steps;
            }
        },
        {
            id: 'stack-linked-head',
            name: '栈-链表-带头结点',
            nameEn: 'Stack (Linked List)',
            desc: '使用链表实现的栈，头插头删',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>链栈</h3>
                    <p>链栈使用链表实现，入栈和出栈都在栈顶进行，时间复杂度为O(1)。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">LinkStack</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.head = Node(<span class="code-number">0</span>)</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">push</span>(self, e):</span>',
                '<span class="code-line">        s = Node(e)</span>',
                '<span class="code-line">        s.next = self.head.next</span>',
                '<span class="code-line">        self.head.next = s</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">pop</span>(self):</span>',
                '<span class="code-line">        p = self.head.next</span>',
                '<span class="code-line">        self.head.next = p.next</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> p.data</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建栈顶头结点' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `push(${val})` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `s.next = head.next` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `head.next = s` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '链栈构建完成' });
                return steps;
            }
        },
        {
            id: 'queue-array',
            name: '队列-顺序表',
            nameEn: 'Queue (Array)',
            desc: '使用数组实现的队列，遵循FIFO原则',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>队列特点</h3>
                    <p>队列是一种先进先出(FIFO)的数据结构，只允许在队尾插入，队头删除。</p>
                </div>
            `,
            python: [
                'class SqQueue:',
                '    def __init__(self):',
                '        self.data = []',
                '        self.front = 0',
                '        self.rear = 0',
                '',
                '    def enqueue(self, e):',
                '        self.data.append(e)',
                '        self.rear += 1',
                '',
                '    def dequeue(self):',
                '        self.front += 1',
                '        return self.data[self.front-1]'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [], head: 0, tail: -1, line: 1, message: 'front=rear=0' });
                let queue = [];
                arr.forEach((val, i) => {
                    queue.push(val);
                    steps.push({ type: 'enqueue', array: [...queue], head: 0, tail: queue.length - 1, line: 6, message: `入队 ${val}` });
                    steps.push({ type: 'code-line', array: [...queue], head: 0, tail: queue.length - 1, line: 7, message: `rear++` });
                });
                queue.forEach((val, i) => {
                    steps.push({ type: 'dequeue', array: [...queue], head: 0, tail: queue.length - 1, line: 9, message: `front++` });
                    queue.shift();
                    steps.push({ type: 'visit', array: [...queue], head: 0, tail: queue.length - 1, line: 10, message: `出队 ${val}` });
                });
                steps.push({ type: 'complete', array: [...queue], head: 0, tail: -1, line: 11, message: '队列操作完成' });
                return steps;
            }
        },
        {
            id: 'queue-circular',
            name: '队列-循环队列',
            nameEn: 'Circular Queue',
            desc: '使用循环数组避免假溢出问题',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>循环队列</h3>
                    <p>循环队列通过取模运算实现逻辑上的环形结构，充分利用存储空间。</p>
                </div>
            `,
            python: [
                'MAXSIZE = 100',
                'class CirQueue:',
                '    def __init__(self):',
                '        self.data = [None]*MAXSIZE',
                '        self.front = 0',
                '        self.rear = 0',
                '',
                '    def enqueue(self, e):',
                '        self.rear = (self.rear+1) % MAXSIZE',
                '        self.data[self.rear] = e',
                '',
                '    def dequeue(self):',
                '        self.front = (self.front+1) % MAXSIZE',
                '        return self.data[self.front]'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [], head: 0, tail: -1, line: 2, message: '初始化循环队列' });
                let queue = [];
                arr.forEach((val, i) => {
                    queue.push(val);
                    steps.push({ type: 'enqueue', array: [...queue], head: 0, tail: queue.length - 1, line: 8, message: `rear = (rear+1) % MAXSIZE` });
                    steps.push({ type: 'code-line', array: [...queue], head: 0, tail: queue.length - 1, line: 9, message: `入队 ${val}` });
                });
                queue.forEach((val, i) => {
                    steps.push({ type: 'dequeue', array: [...queue], head: 0, tail: queue.length - 1, line: 11, message: `front = (front+1) % MAXSIZE` });
                    queue.shift();
                    steps.push({ type: 'visit', array: [...queue], head: 0, tail: queue.length - 1, line: 12, message: `出队 ${val}` });
                });
                steps.push({ type: 'complete', array: [...queue], head: 0, tail: -1, line: 13, message: '循环队列完成' });
                return steps;
            }
        },
        {
            id: 'bracket-match',
            name: '括号匹配',
            nameEn: 'Bracket Matching',
            desc: '使用栈检查表达式中括号是否匹配',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>括号匹配原理</h3>
                    <p>遇到左括号入栈，遇到右括号时检查是否与栈顶左括号匹配。</p>
                </div>
            `,
            python: [
                'def bracket_match(expr):',
                '    stack = []',
                '    pairs = {")": "(", "]": "[", "}": "{"}',
                '    for ch in expr:',
                '        if ch in "([{":',
                '            stack.append(ch)',
                '        elif ch in ")]}":',
                '            if not stack or stack[-1] != pairs[ch]:',
                '                return False',
                '            stack.pop()',
                '    return not stack'
            ],
            generateSteps: (arr) => {
                const brackets = ['(', ')', '[', ']', '{', '}'];
                const steps = [];
                steps.push({ type: 'init', array: [], top: -1, line: 1, message: '初始化空栈' });
                let stack = [];
                brackets.forEach((b, i) => {
                    if ('([{'.includes(b)) {
                        stack.push(b);
                        steps.push({ type: 'push', array: [...stack], top: stack.length - 1, indices: [i], line: 4, message: `遇到 ${b}, 入栈` });
                        steps.push({ type: 'code-line', array: [...stack], top: stack.length - 1, line: 5, message: `stack.append('${b}')` });
                    } else {
                        steps.push({ type: 'compare', array: [...stack], top: stack.length - 1, indices: [i], line: 6, message: `遇到 ${b}, 检查栈顶` });
                        if (stack.length > 0 && stack[stack.length - 1] === {')': '(', ']': '[', '}': '{'}[b]) {
                            steps.push({ type: 'pop', array: [...stack], top: stack.length - 1, line: 9, message: `匹配 ${b} 与 ${stack[stack.length - 1]}, pop()` });
                            stack.pop();
                        } else {
                            steps.push({ type: 'complete', array: [...stack], top: stack.length - 1, line: 9, message: '匹配失败!' });
                        }
                    }
                });
                steps.push({ type: 'complete', array: [...stack], top: stack.length - 1, line: 11, message: stack.length === 0 ? '匹配成功!' : '栈非空' });
                return steps;
            }
        },
        {
            id: 'expr-eval',
            name: '表达式计算',
            nameEn: 'Expression Evaluation',
            desc: '使用栈进行中缀表达式求值',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>表达式求值</h3>
                    <p>使用两个栈分别存储操作数和操作符，按照运算符优先级进行计算。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">eval_expr</span>(expr):</span>',
                '<span class="code-line">    num_stack = []</span>',
                '<span class="code-line">    op_stack = [<span class="code-string">"#"</span>]</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> ch <span class="code-keyword">in</span> expr:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> ch.isdigit():</span>',
                '<span class="code-line">            num_stack.append(int(ch))</span>',
                '<span class="code-line">        <span class="code-keyword">elif</span> ch <span class="code-keyword">in</span> <span class="code-string">"+-*/"</span>:</span>',
                '<span class="code-line">            <span class="code-keyword">while</span> priority(op_stack[-<span class="code-number">1</span>]) >= priority(ch):</span>',
                '<span class="code-line">                num2 = num_stack.pop()</span>',
                '<span class="code-line">                num1 = num_stack.pop()</span>',
                '<span class="code-line">                num_stack.append(calc(num1, op_stack.pop(), num2))</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '初始化操作数栈和操作符栈' });
                arr.forEach((val, i) => {
                    if (i % 2 === 0) {
                        steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `数字 ${val} 入操作数栈` });
                    } else {
                        steps.push({ type: 'compare', indices: [i], array: [...arr], line: 2, message: `运算符 ${val} 处理` });
                        steps.push({ type: 'code-line', array: [...arr], line: 3, message: `比较优先级` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '表达式求值完成' });
                return steps;
            }
        },
        {
            id: 'deque',
            name: '双端队列',
            nameEn: 'Deque',
            desc: '可以在两端进行插入和删除的队列',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>双端队列</h3>
                    <p>双端队列是一种特殊的队列，允许在两端进行插入和删除操作。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">from</span> collections <span class="code-keyword">import</span> deque</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">dq = deque()</span>',
                '<span class="code-line">dq.appendleft(<span class="code-number">1</span>)  <span class="code-comment"># 左端插入</span></span>',
                '<span class="code-line">dq.append(<span class="code-number">2</span>)     <span class="code-comment"># 右端插入</span></span>',
                '<span class="code-line">dq.popleft()   <span class="code-comment"># 左端删除</span></span>',
                '<span class="code-line">dq.pop()       <span class="code-comment"># 右端删除</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建空双端队列' });
                arr.forEach((val, i) => {
                    if (i % 2 === 0) {
                        steps.push({ type: 'code-line', array: [...arr], line: 1, message: `appendleft(${val})` });
                    } else {
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `append(${val})` });
                    }
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 3, message: `队列: ${val}` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '双端队列完成' });
                return steps;
            }
        },
        {
            id: 'stack-linked-no-head',
            name: '栈-链表-不带头结点',
            nameEn: 'Stack (Linked List No Head)',
            desc: '不带头结点的链栈实现',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>不带头结点的链栈</h3>
                    <p>第一个数据节点即为栈顶，入栈和出栈操作直接操作栈顶指针。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">StackNoHead</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.top = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">push</span>(self, e):</span>',
                '<span class="code-line">        s = Node(e)</span>',
                '<span class="code-line">        s.next = self.top</span>',
                '<span class="code-line">        self.top = s</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">pop</span>(self):</span>',
                '<span class="code-line">        p = self.top</span>',
                '<span class="code-line">        self.top = p.next</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> p.data</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: 'top = None' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'code-line', array: [...arr], line: 1, message: `创建节点 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `s.next = top` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `top = s` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '链栈构建完成' });
                return steps;
            }
        },
        {
            id: 'queue-linked-head',
            name: '队列-链表-带头结点',
            nameEn: 'Queue (Linked List Head)',
            desc: '带头结点的链式队列',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>链式队列</h3>
                    <p>链式队列使用链表实现，通过头指针和尾指针维护队列。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">LinkQueue</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.front = self.rear = Node(<span class="code-number">0</span>)</span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">enqueue</span>(self, e):</span>',
                '<span class="code-line">        s = Node(e)</span>',
                '<span class="code-line">        self.rear.next = s</span>',
                '<span class="code-line">        self.rear = s</span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">dequeue</span>(self):</span>',
                '<span class="code-line">        p = self.front.next</span>',
                '<span class="code-line">        self.front.next = p.next</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> p.data</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建头结点, front=rear' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'code-line', array: [...arr], line: 1, message: `创建节点 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `rear.next = s` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `rear = s` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '链式队列完成' });
                return steps;
            }
        },
        {
            id: 'queue-linked-no-head',
            name: '队列-链表-不带头结点',
            nameEn: 'Queue (Linked List No Head)',
            desc: '不带头结点的链式队列',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>不带头结点的链式队列</h3>
                    <p>第一个节点即为数据节点，需要特殊处理空队列的情况。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">QueueNoHead</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.front = self.rear = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">enqueue</span>(self, e):</span>',
                '<span class="code-line">        s = Node(e)</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> <span class="code-keyword">not</span> self.rear:</span>',
                '<span class="code-line">            self.front = self.rear = s</span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            self.rear.next = s</span>',
                '<span class="code-line">            self.rear = s</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: 'front = rear = None' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'code-line', array: [...arr], line: 1, message: `创建节点 ${val}` });
                    if (i === 0) {
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `front = rear = s (首个节点)` });
                    } else {
                        steps.push({ type: 'code-line', array: [...arr], line: 3, message: `rear.next = s, rear = s` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '不带头结点队列完成' });
                return steps;
            }
        },
        {
            id: 'queue-level-order',
            name: '队列-层次遍历',
            nameEn: 'Level Order Traversal',
            desc: '使用队列进行树的层次遍历',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>层次遍历</h3>
                    <p>利用队列先进先出的特性，按层次顺序遍历树的节点。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">from</span> collections <span class="code-keyword">import</span> deque</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">level_order</span>(root):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-keyword">not</span> root: <span class="code-keyword">return</span> []</span>',
                '<span class="code-line">    queue = deque([root])</span>',
                '<span class="code-line">    result = []</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> queue:</span>',
                '<span class="code-line">        node = queue.popleft()</span>',
                '<span class="code-line">        result.append(node.val)</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> node.left: queue.append(node.left)</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> node.right: queue.append(node.right)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> result</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建队列, 根节点入队' });
                arr.forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `出队 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `访问节点` });
                    if (i < arr.length - 1) {
                        steps.push({ type: 'code-line', array: [...arr], line: 3, message: `左右子节点入队` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '层次遍历完成' });
                return steps;
            }
        }
    ],

    // ===== 查找 =====
    searching: [
        {
            id: 'linear-search',
            name: '线性搜索',
            nameEn: 'Linear Search',
            desc: '从头到尾遍历数组查找目标元素',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>线性搜索是最简单的搜索算法，它按顺序检查数组中的每个元素，直到找到目标或遍历完所有元素。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从数组的第一个元素开始</li>
                        <li>比较当前元素与目标值</li>
                        <li>如果相等，返回当前位置</li>
                        <li>如果不等，移动到下一个元素</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">LinearSearch</span>(arr, target)</span>',
                '<span class="code-line" data-line="1">    n ← length(arr)</span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for</span> i ← <span class="code-number">0</span> <span class="code-keyword">to</span> n-<span class="code-number">1</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        <span class="code-keyword">if</span> arr[i] = target <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="4">            <span class="code-keyword">return</span> i</span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="7">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>',
                '<span class="code-line" data-line="8"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">linear_search</span>(arr, target):</span>',
                '<span class="code-line">    <span class="code-string">"""线性搜索"""</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-function">len</span>(arr)):</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> arr[i] == target:</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> i</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr];
                const t = a[Math.floor(Math.random() * a.length)];
                steps.push({ type: 'start', array: a, target: t, line: 1, message: `搜索目标: ${t}` });
                for (let i = 0; i < a.length; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: a, target: t, line: 3, message: `遍历 i = ${i}` });
                    steps.push({ type: 'check', index: i, array: a, target: t, line: 4, message: `检查 arr[${i}] = ${a[i]} == ${t}?` });
                    if (a[i] === t) {
                        steps.push({ type: 'found', index: i, array: a, target: t, line: 5, message: `找到目标 ${t} 在位置 ${i}!` });
                        return steps;
                    }
                    steps.push({ type: 'code-line', array: a, line: 3, message: '不匹配，继续下一轮' });
                }
                steps.push({ type: 'loop-end', array: a, line: 3, message: '遍历完成' });
                steps.push({ type: 'not_found', array: a, target: t, line: 6, message: '未找到目标' });
                return steps;
            }
        },
        {
            id: 'seq-search-unordered',
            name: '顺序查找-无序表',
            nameEn: 'Sequential Search (Unordered)',
            desc: '在无序表中顺序查找目标元素',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>顺序查找(无序)</h3>
                    <p>最简单的查找方法，从表的一端开始顺序扫描，直到找到目标或扫描完所有元素。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">seq_search_unordered</span>(arr, target):</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(<span class="code-function">len</span>(arr)):</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> arr[i] == target:</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> i</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const target = arr[Math.floor(arr.length / 2)];
                steps.push({ type: 'init', array: [...arr], line: 0, message: `查找目标: ${target}` });
                
                for (let i = 0; i < Math.min(arr.length, 6); i++) {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `比较 arr[${i}]=${arr[i]} 与 ${target}` });
                    if (arr[i] === target) {
                        steps.push({ type: 'complete', array: [...arr], line: 2, message: `找到! 位置 ${i}` });
                        return steps;
                    }
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '未找到' });
                return steps;
            }
        },
        {
            id: 'seq-search-ordered',
            name: '顺序查找-有序表',
            nameEn: 'Sequential Search (Ordered)',
            desc: '在有序表中顺序查找，可提前终止',
            complexity: { best: 'O(1)', avg: 'O(n/2)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>顺序查找(有序)</h3>
                    <p>在有序表中顺序查找，当遇到大于目标的元素时可以提前终止。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">seq_search_ordered</span>(arr, target):</span>',
                '<span class="code-line">    i = <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> i < <span class="code-function">len</span>(arr) <span class="code-keyword">and</span> arr[i] <= target:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> arr[i] == target:</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> i</span>',
                '<span class="code-line">        i += <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const sortedArr = [...arr].sort((a, b) => a - b);
                const target = sortedArr[Math.floor(sortedArr.length / 2)];
                steps.push({ type: 'init', array: sortedArr, line: 0, message: `有序表查找, 目标: ${target}` });
                
                for (let i = 0; i < sortedArr.length; i++) {
                    steps.push({ type: 'visit', indices: [i], array: sortedArr, line: 1, message: `比较 arr[${i}]=${sortedArr[i]}` });
                    if (sortedArr[i] === target) {
                        steps.push({ type: 'complete', array: sortedArr, line: 2, message: `找到! 位置 ${i}` });
                        return steps;
                    }
                    if (sortedArr[i] > target) {
                        steps.push({ type: 'code-line', array: sortedArr, line: 3, message: `arr[${i}] > 目标, 提前终止` });
                        break;
                    }
                }
                
                steps.push({ type: 'complete', array: sortedArr, line: 4, message: '未找到' });
                return steps;
            }
        },
        {
            id: 'binary',
            name: '二分搜索',
            nameEn: 'Binary Search',
            desc: '在有序数组中快速定位目标元素',
            complexity: { best: 'O(1)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>二分搜索适用于有序数组，通过每次将搜索范围缩小一半来快速定位目标元素。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>确定搜索范围的左右边界</li>
                        <li>计算中间位置</li>
                        <li>比较中间元素与目标值</li>
                        <li>如果目标较小，搜索左半部分；否则搜索右半部分</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BinarySearch</span>(arr, target)</span>',
                '<span class="code-line" data-line="1">    left ← <span class="code-number">0</span></span>',
                '<span class="code-line" data-line="2">    right ← length(arr) - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> left ≤ right <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        mid ← (left + right) / <span class="code-number">2</span></span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">if</span> arr[mid] = target <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="6">            <span class="code-keyword">return</span> mid</span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">else if</span> arr[mid] < target <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="8">            left ← mid + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="9">        <span class="code-keyword">else</span></span>',
                '<span class="code-line" data-line="10">            right ← mid - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="11">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="12">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="13">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>',
                '<span class="code-line" data-line="14"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">binary_search</span>(arr, target):</span>',
                '<span class="code-line">    <span class="code-string">"""二分搜索"""</span></span>',
                '<span class="code-line">    left, right = <span class="code-number">0</span>, <span class="code-function">len</span>(arr) - <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> left <= right:</span>',
                '<span class="code-line">        mid = (left + right) // <span class="code-number">2</span></span>',
                '<span class="code-line">        <span class="code-keyword">if</span> arr[mid] == target:</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> mid</span>',
                '<span class="code-line">        <span class="code-keyword">elif</span> arr[mid] < target:</span>',
                '<span class="code-line">            left = mid + <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            right = mid - <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const a = [...arr].sort((a, b) => a - b);
                const t = a[Math.floor(Math.random() * a.length)];
                steps.push({ type: 'start', array: a, target: t, line: 1, message: `搜索目标: ${t} (数组已排序)` });
                let left = 0, right = a.length - 1;
                steps.push({ type: 'code-line', indices: [left, right], array: a, line: 3, message: `left = ${left}, right = ${right}` });
                while (left <= right) {
                    steps.push({ type: 'loop-start', indices: [left, right], array: a, line: 4, message: `while条件: ${left} ≤ ${right}` });
                    const mid = Math.floor((left + right) / 2);
                    steps.push({ type: 'code-line', indices: [mid], array: a, line: 5, message: `mid = (${left} + ${right}) // 2 = ${mid}` });
                    steps.push({ type: 'check', index: mid, range: [left, right], array: a, target: t, line: 6, message: `检查 arr[${mid}] = ${a[mid]} == ${t}?` });
                    if (a[mid] === t) {
                        steps.push({ type: 'found', index: mid, array: a, target: t, line: 7, message: `找到目标 ${t} 在位置 ${mid}!` });
                        return steps;
                    } else if (a[mid] < t) {
                        steps.push({ type: 'code-line', indices: [mid], array: a, line: 8, message: `${a[mid]} < ${t}，搜索右半部分` });
                        left = mid + 1;
                        steps.push({ type: 'code-line', indices: [left], array: a, line: 9, message: `left = ${left}` });
                    } else {
                        steps.push({ type: 'code-line', indices: [mid], array: a, line: 10, message: `${a[mid]} > ${t}，搜索左半部分` });
                        right = mid - 1;
                        steps.push({ type: 'code-line', indices: [right], array: a, line: 11, message: `right = ${right}` });
                    }
                }
                steps.push({ type: 'loop-end', array: a, line: 4, message: 'while循环结束' });
                steps.push({ type: 'not_found', array: a, target: t, line: 12, message: '未找到目标' });
                return steps;
            }
        }
    ],
    'linked-list': [
        {
            id: 'll-create',
            name: '链表创建',
            nameEn: 'Linked List Creation',
            desc: '创建链表节点并连接成链表结构',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>什么是链表？</h3>
                    <p>链表是一种线性数据结构，每个节点包含数据和指向下一个节点的指针。与数组不同，链表的节点在内存中不必连续存放。</p>
                </div>
                <div class="theory-section">
                    <h3>节点结构</h3>
                    <ul>
                        <li><strong>data</strong>：存储数据</li>
                        <li><strong>next</strong>：指向下一个节点的指针</li>
                        <li>最后一个节点的 next 指向 null</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">class</span> <span class="code-function">Node</span></span>',
                '<span class="code-line" data-line="1">    data</span>',
                '<span class="code-line" data-line="2">    next ← <span class="code-keyword">null</span></span>',
                '<span class="code-line" data-line="3"></span>',
                '<span class="code-line" data-line="4"><span class="code-keyword">procedure</span> <span class="code-function">CreateLinkedList</span>(values)</span>',
                '<span class="code-line" data-line="5">    head ← <span class="code-keyword">null</span></span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">for each</span> value <span class="code-keyword">in</span> values <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="7">        new_node ← Node(value)</span>',
                '<span class="code-line" data-line="8">        new_node.next ← head</span>',
                '<span class="code-line" data-line="9">        head ← new_node</span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="11">    <span class="code-keyword">return</span> head</span>'
            ],
            python: [
                'class Node:',
                '    def __init__(self, data):',
                '        self.data = data',
                '        self.next = None',
                '',
                'def create_linked_list(values):',
                '    head = None',
                '    for value in values:',
                '        new_node = Node(value)',
                '        new_node.next = head',
                '        head = new_node',
                '    return head'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const list = [];
                steps.push({ type: 'start', list: [], line: 6, message: '开始创建链表' });
                steps.push({ type: 'code-line', list: [], line: 7, message: 'head = None' });
                for (let i = 0; i < arr.length; i++) {
                    steps.push({ type: 'loop-start', list: [...list], line: 8, message: `遍历值: ${arr[i]}` });
                    steps.push({ type: 'code-line', list: [...list], line: 9, message: `创建新节点 Node(${arr[i]})` });
                    list.unshift(arr[i]);
                    steps.push({ type: 'code-line', list: [...list], line: 10, message: `new_node.next = head` });
                    steps.push({ type: 'insert', list: [...list], line: 11, message: `head = ${arr[i]}` });
                }
                steps.push({ type: 'loop-end', list: [...list], line: 11, message: '遍历完成' });
                steps.push({ type: 'complete', list: [...list], line: 12, message: '链表创建完成' });
                return steps;
            }
        },
        {
            id: 'll-reverse',
            name: '链表反转',
            nameEn: 'Linked List Reverse',
            desc: '将链表的方向反转',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>链表反转通过改变每个节点的 next 指针方向来实现。使用三个指针：prev、curr、next，在遍历过程中不断改变指针方向。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>初始化 prev = null, curr = head</li>
                        <li>保存 curr.next 到 next</li>
                        <li>将 curr.next 指向 prev</li>
                        <li>移动 prev 和 curr 到下一个位置</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">ReverseLinkedList</span>(head)</span>',
                '<span class="code-line" data-line="1">    prev ← <span class="code-keyword">null</span></span>',
                '<span class="code-line" data-line="2">    curr ← head</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> curr ≠ <span class="code-keyword">null</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        next ← curr.next</span>',
                '<span class="code-line" data-line="5">        curr.next ← prev</span>',
                '<span class="code-line" data-line="6">        prev ← curr</span>',
                '<span class="code-line" data-line="7">        curr ← next</span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">return</span> prev</span>',
                '<span class="code-line" data-line="10"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                'def reverse_linked_list(head):',
                '    prev = None',
                '    curr = head',
                '    while curr:',
                '        next_temp = curr.next',
                '        curr.next = prev',
                '        prev = curr',
                '        curr = next_temp',
                '    return prev'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const list = [...arr];
                steps.push({ type: 'start', list: [...list], line: 1, message: '开始链表反转' });
                steps.push({ type: 'code-line', list: [...list], line: 2, message: 'prev = None' });
                let prev = null;
                let curr = 0;
                steps.push({ type: 'code-line', list: [...list], line: 3, message: `curr = head (${list[0]})` });
                while (curr < list.length) {
                    steps.push({ type: 'loop-start', list: [...list], line: 4, message: `while curr: curr=${curr < list.length ? list[curr] : 'None'}` });
                    const next = curr + 1;
                    steps.push({ type: 'code-line', list: [...list], line: 5, message: `next_temp = curr.next = ${next < list.length ? list[next] : 'None'}` });
                    steps.push({ type: 'reverse', list: [...list], line: 6, message: `curr.next = prev = ${prev !== null ? list[prev] : 'None'}` });
                    prev = curr;
                    steps.push({ type: 'code-line', list: [...list], line: 7, message: `prev = ${prev !== null ? list[prev] : 'None'}` });
                    curr = next;
                    steps.push({ type: 'code-line', list: [...list], line: 8, message: `curr = ${curr < list.length ? list[curr] : 'None'}` });
                }
                steps.push({ type: 'loop-end', list: [...list], line: 4, message: 'while循环结束' });
                steps.push({ type: 'complete', list: [...list].reverse(), line: 9, message: '返回新头节点' });
                return steps;
            }
        },
        {
            id: 'll-cycle',
            name: '链表环检测',
            nameEn: 'Cycle Detection',
            desc: '使用快慢指针检测链表中是否存在环',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>Floyd 龟兔赛跑算法</h3>
                    <p>使用两个指针，慢指针每次移动一步，快指针每次移动两步。如果链表中存在环，快指针最终会追上慢指针。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>创建两个指针：slow 和 fast，初始都指向头节点</li>
                        <li>slow 每次移动一步，fast 每次移动两步</li>
                        <li>如果链表有环，fast 最终会与 slow 相遇</li>
                        <li>如果 fast 到达 null，说明没有环</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">HasCycle</span>(head)</span>',
                '<span class="code-line" data-line="1">    slow ← head</span>',
                '<span class="code-line" data-line="2">    fast ← head</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> fast ≠ <span class="code-keyword">null</span> <span class="code-keyword">and</span> fast.next ≠ <span class="code-keyword">null</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        slow ← slow.next</span>',
                '<span class="code-line" data-line="5">        fast ← fast.next.next</span>',
                '<span class="code-line" data-line="6">        <span class="code-keyword">if</span> slow = fast <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="7">            <span class="code-keyword">return</span> <span class="code-keyword">true</span></span>',
                '<span class="code-line" data-line="8">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="10">    <span class="code-keyword">return</span> <span class="code-keyword">false</span></span>',
                '<span class="code-line" data-line="11"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                'def has_cycle(head):',
                '    slow = fast = head',
                '    while fast and fast.next:',
                '        slow = slow.next',
                '        fast = fast.next.next',
                '        if slow == fast:',
                '            return True',
                '    return False'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const list = [...arr];
                steps.push({ type: 'code-line', list: [...list], line: 1, message: '开始环检测' });
                steps.push({ type: 'code-line', list: [...list], slow: 0, fast: 0, line: 2, message: 'slow = head, fast = head' });
                
                let slow = 0, fast = 0;
                const maxSteps = list.length + 2;
                
                for (let i = 0; i < maxSteps; i++) {
                    steps.push({ type: 'loop-start', list: [...list], slow: slow, fast: fast, line: 3, message: `while fast and fast.next` });
                    steps.push({ type: 'code-line', list: [...list], slow: slow, fast: fast, line: 4, message: `slow = slow.next` });
                    slow = (slow + 1) % list.length;
                    steps.push({ type: 'code-line', list: [...list], slow: slow, fast: fast, line: 5, message: `fast = fast.next.next` });
                    fast = (fast + 2) % list.length;
                    steps.push({ type: 'compare-pointers', list: [...list], slow: slow, fast: fast, line: 6, message: `if slow == fast` });
                    
                    if (slow === fast && i > 0) {
                        steps.push({ type: 'found', list: [...list], slow: slow, fast: fast, line: 7, message: `发现环！slow和fast在位置 ${slow} 相遇` });
                        break;
                    }
                    steps.push({ type: 'loop-end', list: [...list], slow: slow, fast: fast, line: 3, message: '继续检测' });
                }
                
                if (slow !== fast || (slow === fast && list.length < 3)) {
                    steps.push({ type: 'not_found', list: [...list], slow: slow, fast: fast, line: 8, message: '未发现环' });
                }
                steps.push({ type: 'complete', list: [...list], line: 8, message: '返回 False' });
                return steps;
            }
        },
        {
            id: 'll-merge',
            name: '链表合并',
            nameEn: 'Merge Two Lists',
            desc: '合并两个有序链表',
            complexity: { best: 'O(n+m)', avg: 'O(n+m)', worst: 'O(n+m)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>合并两个有序链表时，比较两个链表当前节点的值，将较小的节点接到结果链表上，直到某个链表为空，然后将另一个链表接到结果尾部。</p>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">MergeLists</span>(l1, l2)</span>',
                '<span class="code-line" data-line="1">    dummy ← Node(<span class="code-number">0</span>)</span>',
                '<span class="code-line" data-line="2">    current ← dummy</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">while</span> l1 ≠ <span class="code-keyword">null</span> <span class="code-keyword">and</span> l2 ≠ <span class="code-keyword">null</span> <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        <span class="code-keyword">if</span> l1.val ≤ l2.val <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">            current.next ← l1</span>',
                '<span class="code-line" data-line="6">            l1 ← l1.next</span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">else</span></span>',
                '<span class="code-line" data-line="8">            current.next ← l2</span>',
                '<span class="code-line" data-line="9">            l2 ← l2.next</span>',
                '<span class="code-line" data-line="10">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="11">        current ← current.next</span>',
                '<span class="code-line" data-line="12">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="13">    current.next ← l1 <span class="code-keyword">if</span> l1 ≠ <span class="code-keyword">null</span> <span class="code-keyword">else</span> l2</span>',
                '<span class="code-line" data-line="14">    <span class="code-keyword">return</span> dummy.next</span>'
            ],
            python: [
                'def merge_two_lists(l1, l2):',
                '    dummy = Node(0)',
                '    current = dummy',
                '    while l1 and l2:',
                '        if l1.val <= l2.val:',
                '            current.next = l1',
                '            l1 = l1.next',
                '        else:',
                '            current.next = l2',
                '            l2 = l2.next',
                '        current = current.next',
                '    current.next = l1 or l2',
                '    return dummy.next'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const list1 = [...arr.slice(0, Math.ceil(arr.length/2))].sort((a,b)=>a-b);
                const list2 = [...arr.slice(Math.ceil(arr.length/2))].sort((a,b)=>a-b);
                const merged = [];
                
                steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [], line: 1, message: `def merge_two_lists(l1, l2)` });
                steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [], line: 2, message: `dummy = Node(0)` });
                steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [], line: 3, message: `current = dummy` });
                
                let i = 0, j = 0;
                while (i < list1.length && j < list2.length) {
                    steps.push({ type: 'loop-start', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 4, message: `while l1 and l2: 比较 ${list1[i]} 和 ${list2[j]}` });
                    if (list1[i] <= list2[j]) {
                        merged.push(list1[i]);
                        steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 5, message: `if l1.val <= l2.val: ${list1[i]} <= ${list2[j]}，选择 list1` });
                        steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 6, message: `current.next = l1` });
                        i++;
                        steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 7, message: `l1 = l1.next` });
                    } else {
                        merged.push(list2[j]);
                        steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 8, message: `else: ${list1[i]} > ${list2[j]}，选择 list2` });
                        steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 9, message: `current.next = l2` });
                        j++;
                        steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 10, message: `l2 = l2.next` });
                    }
                    steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 11, message: `current = current.next` });
                }
                
                steps.push({ type: 'loop-end', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 4, message: 'while循环结束' });
                
                if (i < list1.length) {
                    steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 12, message: `current.next = l1 (添加剩余节点)` });
                } else if (j < list2.length) {
                    steps.push({ type: 'code-line', list1: [...list1], list2: [...list2], merged: [...merged], i, j, line: 12, message: `current.next = l2 (添加剩余节点)` });
                }
                
                steps.push({ type: 'complete', list1: [], list2: [], merged: [...merged], line: 13, message: `return dummy.next: ${merged.join(' -> ')}` });
                return steps;
            }
        },
        {
            id: 'b-tree',
            name: 'B树',
            nameEn: 'B-Tree',
            desc: '一种自平衡的多路搜索树，适用于磁盘读写',
            complexity: { best: 'O(log n)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>B树特点</h3>
                    <p>B树是一种平衡的多叉树，每个节点可以有多个子节点和关键字，适合大规模数据的索引。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">BTreeNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, leaf=<span class="code-keyword">False</span>):</span>',
                '<span class="code-line">        self.keys = []</span>',
                '<span class="code-line">        self.children = []</span>',
                '<span class="code-line">        self.leaf = leaf</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">insert_non_full</span>(self, k):</span>',
                '<span class="code-line">        i = <span class="code-function">len</span>(self.keys) - <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">if</span> self.leaf:</span>',
                '<span class="code-line">            self.keys.append(<span class="code-number">0</span>)</span>',
                '<span class="code-line">            <span class="code-keyword">while</span> i >= <span class="code-number">0</span> <span class="code-keyword">and</span> self.keys[i] > k:</span>',
                '<span class="code-line">                self.keys[i+<span class="code-number">1</span>] = self.keys[i]</span>',
                '<span class="code-line">                i -= <span class="code-number">1</span></span>',
                '<span class="code-line">            self.keys[i+<span class="code-number">1</span>] = k</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建B树节点(度m=3)' });
                arr.slice(0, 6).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `插入 key=${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `找到合适位置` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `移动keys` });
                    steps.push({ type: 'insert', indices: [i], array: [...arr], line: 4, message: `插入成功` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 5, message: 'B树插入完成' });
                return steps;
            }
        },
        {
            id: 'bplus-tree',
            name: 'B+树',
            nameEn: 'B+ Tree',
            desc: 'B树的变体，所有数据在叶子节点',
            complexity: { best: 'O(log n)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>B+树特点</h3>
                    <p>B+树的所有数据都存储在叶子节点，非叶子节点只存储索引信息，适合范围查询。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">BPlusTreeNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self):</span>',
                '<span class="code-line">        self.keys = []</span>',
                '<span class="code-line">        self.children = []</span>',
                '<span class="code-line">        self.next = <span class="code-keyword">None</span>  <span class="code-comment"># 叶子节点链表</span></span>',
                '<span class="code-line">        self.is_leaf = <span class="code-keyword">True</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># 搜索：从根开始，一直下降到叶子节点</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">search</span>(root, key):</span>',
                '<span class="code-line">    node = root</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> <span class="code-keyword">not</span> node.is_leaf:</span>',
                '<span class="code-line">        i = <span class="code-number">0</span></span>',
                '<span class="code-line">        <span class="code-keyword">while</span> i < <span class="code-function">len</span>(node.keys) <span class="code-keyword">and</span> key > node.keys[i]:</span>',
                '<span class="code-line">            i += <span class="code-number">1</span></span>',
                '<span class="code-line">        node = node.children[i]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> node</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '构建B+树' });
                arr.slice(0, 6).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `插入 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `查找叶子节点` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `更新索引` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: 'B+树构建完成' });
                return steps;
            }
        },
        {
            id: 'red-black',
            name: '红黑树',
            nameEn: 'Red-Black Tree',
            desc: '自平衡的二叉搜索树，节点有红黑颜色',
            complexity: { best: 'O(log n)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>红黑树性质</h3>
                    <ul>
                        <li>每个节点非红即黑</li>
                        <li>根节点是黑色</li>
                        <li>叶子节点(NIL)是黑色</li>
                        <li>红节点的子节点都是黑色</li>
                        <li>任意节点到叶子节点的路径黑高相同</li>
                    </ul>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">RBNode</span>:</span>',
                '<span class="code-line">    RED = <span class="code-keyword">True</span></span>',
                '<span class="code-line">    BLACK = <span class="code-keyword">False</span></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.color = RBNode.RED</span>',
                '<span class="code-line">        self.left = self.right = self.parent = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">left_rotate</span>(T, x):</span>',
                '<span class="code-line">    y = x.right</span>',
                '<span class="code-line">    x.right = y.left</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> y.left != T.nil:</span>',
                '<span class="code-line">        y.left.parent = x</span>',
                '<span class="code-line">    y.parent = x.parent</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建红黑树空状态' });
                arr.slice(0, 5).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `插入 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `BST插入` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `检查并修复红黑性质` });
                    steps.push({ type: 'code-line', array: [...arr], line: 4, message: `可能需要旋转/变色` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 5, message: '红黑树平衡完成' });
                return steps;
            }
        },
        {
            id: 'hash-chain',
            name: '哈希表-拉链法',
            nameEn: 'Hash Table (Chaining)',
            desc: '使用链表解决哈希冲突',
            complexity: { best: 'O(1)', avg: 'O(α)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>拉链法</h3>
                    <p>当发生哈希冲突时，将冲突的元素用链表连接在同一个桶中。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">HashChain</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, size=<span class="code-number">10</span>):</span>',
                '<span class="code-line">        self.size = size</span>',
                '<span class="code-line">        self.buckets = [[] <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-function">range</span>(size)]</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">hash</span>(self, key):</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> key % self.size</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">insert</span>(self, key):</span>',
                '<span class="code-line">        idx = <span class="code-function">self.hash</span>(key)</span>',
                '<span class="code-line">        self.buckets[idx].append(key)</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">search</span>(self, key):</span>',
                '<span class="code-line">        idx = <span class="code-function">self.hash</span>(key)</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> key <span class="code-keyword">in</span> self.buckets[idx]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const tableSize = 5;
                const buckets = Array(tableSize).fill(null).map(() => []);
                steps.push({ type: 'init', array: [...arr], line: 0, message: `创建哈希表, 大小=${tableSize}` });
                
                arr.slice(0, 6).forEach((val, i) => {
                    const idx = val % tableSize;
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `hash(${val}) = ${val} % ${tableSize} = ${idx}` });
                    buckets[idx].push(val);
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `放入桶[${idx}]: [${buckets[idx].join(', ')}]` });
                });
                
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '拉链哈希表构建完成' });
                return steps;
            }
        },
        {
            id: 'hash-open',
            name: '哈希表-开放定址法',
            nameEn: 'Hash Table (Open Addressing)',
            desc: '线性探测/二次探测解决冲突',
            complexity: { best: 'O(1)', avg: 'O(1/(1-α))', worst: 'O(n)', space: 'O(1/(1-α))' },
            theory: `
                <div class="theory-section">
                    <h3>开放定址法</h3>
                    <p>当发生冲突时，使用探测函数找到下一个空位置。常见方法：线性探测、二次探测、双散列。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">HashOpen</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, size=<span class="code-number">10</span>):</span>',
                '<span class="code-line">        self.size = size</span>',
                '<span class="code-line">        self.table = [None] * size</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">hash</span>(self, key, i=<span class="code-number">0</span>):</span>',
                '<span class="code-line">        <span class="code-comment"># 线性探测: h(key) = (hash(key) + i) % m</span></span>',
                '<span class="code-line">        <span class="code-keyword">return</span> (key + i) % self.size</span>',
                '<span class="code-line"></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">insert</span>(self, key):</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(self.size):</span>',
                '<span class="code-line">            idx = <span class="code-function">self.hash</span>(key, i)</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> self.table[idx] <span class="code-keyword">is</span> None:</span>',
                '<span class="code-line">                self.table[idx] = key</span>',
                '<span class="code-line">                <span class="code-keyword">return</span> idx</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const tableSize = 7;
                const table = Array(tableSize).fill(null);
                steps.push({ type: 'init', array: [...arr], line: 0, message: `创建哈希表, 大小=${tableSize}` });
                
                arr.slice(0, 6).forEach((val, i) => {
                    let probe = 0;
                    let idx = val % tableSize;
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `探测 ${probe}: hash(${val}) = ${idx}` });
                    
                    while (table[idx] !== null && probe < tableSize) {
                        probe++;
                        idx = (val + probe) % tableSize;
                        steps.push({ type: 'compare', indices: [i], array: [...arr], line: 2, message: `冲突! 探测 ${probe}: ${idx}` });
                    }
                    
                    if (table[idx] === null) {
                        table[idx] = val;
                        steps.push({ type: 'insert', indices: [i], array: [...arr], line: 3, message: `放入 table[${idx}] = ${val}` });
                    }
                });
                
                steps.push({ type: 'complete', array: [...arr], line: 4, message: `开放定址哈希表完成` });
                return steps;
            }
        }
    ],
    tree: [
        {
            id: 'binary-chain',
            name: '二叉树-链式存储',
            nameEn: 'Binary Tree (Linked)',
            desc: '用链表节点存储二叉树，每个节点含数据域和左右指针',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>二叉树链式存储</h3>
                    <p>每个节点包含数据域和两个指向左右子树的指针。</p>
                </div>
            `,
            python: [
                'class TreeNode:',
                '    def __init__(self, val):',
                '        self.val = val',
                '        self.lchild = None',
                '        self.rchild = None',
                '',
                'def build_tree(values):',
                '    if not values: return None',
                '    root = TreeNode(values[0])',
                '    queue = [root]',
                '    i = 1',
                '    while queue and i < len(values):',
                '        node = queue.pop(0)',
                '        if i < len(values):',
                '            node.lchild = TreeNode(values[i])',
                '            queue.append(node.lchild)',
                '            i += 1',
                '        if i < len(values):',
                '            node.rchild = TreeNode(values[i])',
                '            queue.append(node.rchild)',
                '            i += 1',
                '    return root'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const values = arr.slice(0, 7);
                
                // 构建完整的树结构用于参考
                function buildFullTree(values) {
                    if (!values || values.length === 0) return null;
                    const root = { val: values[0], left: null, right: null };
                    const queue = [root];
                    let i = 1;
                    while (queue.length > 0 && i < values.length) {
                        const node = queue.shift();
                        if (i < values.length) {
                            node.left = { val: values[i], left: null, right: null };
                            queue.push(node.left);
                            i++;
                        }
                        if (i < values.length) {
                            node.right = { val: values[i], left: null, right: null };
                            queue.push(node.right);
                            i++;
                        }
                    }
                    return root;
                }
                
                const fullTree = buildFullTree(values);
                steps.push({ type: 'start', tree: null, line: 5, message: '开始构建二叉树' });
                
                // 逐层构建，每步添加一个节点
                let currentTree = null;
                let i = 0;
                let level = 0;
                let nodesInLevel = 1;
                let nodesAdded = 0;
                
                while (i < values.length) {
                    // 计算当前层能添加的节点数
                    const nodesToAdd = Math.min(nodesInLevel, values.length - i);
                    
                    // 收集当前层的节点
                    const levelNodes = [];
                    for (let j = 0; j < nodesToAdd; j++) {
                        levelNodes.push(values[i + j]);
                    }
                    
                    // 创建当前层的树
                    function buildLevelTree(values, startIdx, lvl, totalLevels) {
                        if (startIdx >= values.length) return null;
                        const root = { val: values[startIdx], left: null, right: null };
                        const queue = [{ node: root, idx: startIdx }];
                        let currentIdx = startIdx + 1;
                        let currentLevel = 1;
                        
                        while (queue.length > 0 && currentIdx < values.length) {
                            const levelSize = queue.length;
                            for (let k = 0; k < levelSize && currentIdx < values.length; k++) {
                                const item = queue.shift();
                                if (currentIdx < values.length && currentLevel < lvl) {
                                    item.node.left = { val: values[currentIdx], left: null, right: null };
                                    queue.push({ node: item.node.left, idx: currentIdx });
                                    currentIdx++;
                                }
                                if (currentIdx < values.length && currentLevel < lvl) {
                                    item.node.right = { val: values[currentIdx], left: null, right: null };
                                    queue.push({ node: item.node.right, idx: currentIdx });
                                    currentIdx++;
                                }
                            }
                            currentLevel++;
                        }
                        return root;
                    }
                    
                    currentTree = buildLevelTree(values, 0, level + 1);
                    steps.push({ 
                        type: 'visit', 
                        tree: JSON.parse(JSON.stringify(currentTree)), 
                        indices: [i],
                        line: 5, 
                        message: `添加节点层 ${level}: [${levelNodes.join(', ')}]` 
                    });
                    
                    i += nodesToAdd;
                    level++;
                    nodesInLevel *= 2;
                }
                
                steps.push({ type: 'complete', tree: fullTree, line: 17, message: '二叉树构建完成' });
                return steps;
            }
        },
        {
            id: 'binary-seq',
            name: '二叉树-顺序存储',
            nameEn: 'Binary Tree (Sequential)',
            desc: '用数组存储完全二叉树，节点i的左右子在2i和2i+1',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>二叉树顺序存储</h3>
                    <p>用数组存储完全二叉树，通过下标计算父子关系。</p>
                </div>
            `,
            python: [
                'def array_to_tree(arr):',
                '    if not arr: return None',
                '    root = arr[0]',
                '    queue = [root]',
                '    i = 1',
                '    while queue and i < len(arr):',
                '        node = queue.pop(0)',
                '        if i < len(arr):',
                '            node.lchild = arr[i]',
                '            queue.append(arr[i])',
                '            i += 1',
                '        if i < len(arr):',
                '            node.rchild = arr[i]',
                '            queue.append(arr[i])',
                '            i += 1',
                '    return root'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const values = arr.slice(0, 7);
                
                // 构建完整的树结构用于参考
                function buildFullTree(values) {
                    if (!values || values.length === 0) return null;
                    const root = { val: values[0], left: null, right: null };
                    const queue = [root];
                    let i = 1;
                    while (queue.length > 0 && i < values.length) {
                        const node = queue.shift();
                        if (i < values.length) {
                            node.left = { val: values[i], left: null, right: null };
                            queue.push(node.left);
                            i++;
                        }
                        if (i < values.length) {
                            node.right = { val: values[i], left: null, right: null };
                            queue.push(node.right);
                            i++;
                        }
                    }
                    return root;
                }
                
                const fullTree = buildFullTree(values);
                steps.push({ type: 'start', tree: null, line: 1, message: '开始顺序存储' });
                
                // 逐层构建，每步添加一层节点
                let currentTree = null;
                let i = 0;
                let level = 0;
                let nodesInLevel = 1;
                
                while (i < values.length) {
                    // 计算当前层能添加的节点数
                    const nodesToAdd = Math.min(nodesInLevel, values.length - i);
                    
                    // 收集当前层的节点
                    const levelNodes = [];
                    for (let j = 0; j < nodesToAdd; j++) {
                        levelNodes.push(values[i + j]);
                    }
                    
                    // 创建当前层的树
                    function buildLevelTree(values, lvl) {
                        if (values.length === 0) return null;
                        const root = { val: values[0], left: null, right: null };
                        const queue = [root];
                        let currentIdx = 1;
                        let currentLevel = 1;
                        
                        while (queue.length > 0 && currentIdx < values.length) {
                            const levelSize = queue.length;
                            for (let k = 0; k < levelSize && currentIdx < values.length; k++) {
                                const node = queue.shift();
                                if (currentLevel < lvl && currentIdx < values.length) {
                                    node.left = { val: values[currentIdx], left: null, right: null };
                                    queue.push(node.left);
                                    currentIdx++;
                                }
                                if (currentLevel < lvl && currentIdx < values.length) {
                                    node.right = { val: values[currentIdx], left: null, right: null };
                                    queue.push(node.right);
                                    currentIdx++;
                                }
                            }
                            currentLevel++;
                        }
                        return root;
                    }
                    
                    currentTree = buildLevelTree(values, level + 1);
                    steps.push({ 
                        type: 'visit', 
                        tree: JSON.parse(JSON.stringify(currentTree)), 
                        indices: [i],
                        line: 1, 
                        message: `添加第 ${level + 1} 层: [${levelNodes.join(', ')}]` 
                    });
                    
                    i += nodesToAdd;
                    level++;
                    nodesInLevel *= 2;
                }
                
                steps.push({ type: 'complete', tree: fullTree, line: 13, message: '顺序存储完成' });
                return steps;
            }
        },
        {
            id: 'bst-insert',
            name: 'BST插入',
            nameEn: 'BST Insert',
            desc: '在二叉搜索树中插入新节点',
            complexity: { best: 'O(log n)', avg: 'O(log n)', worst: 'O(n)', space: 'O(h)' },
            theory: `
                <div class="theory-section">
                    <h3>什么是二叉搜索树？</h3>
                    <p>二叉搜索树(BST)是一种特殊的二叉树，满足以下性质：</p>
                    <ul>
                        <li>左子树的所有节点值小于根节点值</li>
                        <li>右子树的所有节点值大于根节点值</li>
                    </ul>
                </div>
                <div class="theory-section">
                    <h3>插入规则</h3>
                    <ul>
                        <li>从根节点开始比较</li>
                        <li>如果值小于当前节点，转向左子树</li>
                        <li>如果值大于当前节点，转向右子树</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BSTInsert</span>(root, value)</span>',
                '<span class="code-line" data-line="1">    <span class="code-keyword">if</span> root = <span class="code-keyword">null</span> <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="2">        <span class="code-keyword">return</span> Node(value)</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="4">    <span class="code-keyword">if</span> value < root.value <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">        root.left ← BSTInsert(root.left, value)</span>',
                '<span class="code-line" data-line="6">    <span class="code-keyword">else</span></span>',
                '<span class="code-line" data-line="7">        root.right ← BSTInsert(root.right, value)</span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="9">    <span class="code-keyword">return</span> root</span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">TreeNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.left = <span class="code-keyword">None</span></span>',
                '<span class="code-line">        self.right = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bst_insert</span>(root, val):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-keyword">not</span> root:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> TreeNode(val)</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> val < root.val:</span>',
                '<span class="code-line">        root.left = bst_insert(root.left, val)</span>',
                '<span class="code-line">    <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">        root.right = bst_insert(root.right, val)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> root</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const tree = { val: arr[0], left: null, right: null };
                steps.push({ type: 'insert', tree: JSON.parse(JSON.stringify(tree)), line: 8, message: `插入根节点 ${arr[0]}` });
                for (let i = 1; i < arr.length; i++) {
                    let node = tree;
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 8, message: `插入值 ${arr[i]}` });
                    while (true) {
                        if (arr[i] < node.val) {
                            steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 10, message: `${arr[i]} < ${node.val}，向左` });
                            if (node.left === null) {
                                node.left = { val: arr[i], left: null, right: null };
                                steps.push({ type: 'insert', tree: JSON.parse(JSON.stringify(tree)), line: 11, message: `插入 ${arr[i]} 到 ${node.val} 的左子树` });
                                break;
                            }
                            node = node.left;
                        } else {
                            steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 13, message: `${arr[i]} >= ${node.val}，向右` });
                            if (node.right === null) {
                                node.right = { val: arr[i], left: null, right: null };
                                steps.push({ type: 'insert', tree: JSON.parse(JSON.stringify(tree)), line: 14, message: `插入 ${arr[i]} 到 ${node.val} 的右子树` });
                                break;
                            }
                            node = node.right;
                        }
                    }
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 15, message: '返回root' });
                }
                steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), line: 15, message: 'BST构建完成' });
                return steps;
            }
        },
        {
            id: 'tree-traverse',
            name: '二叉树遍历',
            nameEn: 'Tree Traversal',
            desc: '前序、中序、后序、层次遍历二叉树',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(h)' },
            theory: `
                <div class="theory-section">
                    <h3>前序遍历 (Preorder)</h3>
                    <p><strong>根 → 左 → 右</strong>：先访问根节点，再遍历左子树，最后遍历右子树。</p>
                </div>
                <div class="theory-section">
                    <h3>中序遍历 (Inorder)</h3>
                    <p><strong>左 → 根 → 右</strong>：先遍历左子树，再访问根节点，最后遍历右子树。</p>
                </div>
                <div class="theory-section">
                    <h3>后序遍历 (Postorder)</h3>
                    <p><strong>左 → 右 → 根</strong>：先遍历左子树，再遍历右子树，最后访问根节点。</p>
                </div>
            `,
            python: `
<span class="code-line"><span class="code-comment"># 根据选择的变体显示对应代码</span></span>`,
            variants: [
                {
                    id: 'preorder',
                    name: '前序',
                    python: [
                        '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">preorder</span>(node):</span>',
                        '<span class="code-line">    <span class="code-keyword">if</span> node:</span>',
                        '<span class="code-line">        <span class="code-function">print</span>(node.val)  <span class="code-comment"># 访问根</span></span>',
                        '<span class="code-line">        preorder(node.left)  <span class="code-comment"># 遍历左</span></span>',
                        '<span class="code-line">        preorder(node.right) <span class="code-comment"># 遍历右</span></span>'
                    ]
                },
                {
                    id: 'inorder',
                    name: '中序',
                    python: [
                        '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">inorder</span>(node):</span>',
                        '<span class="code-line">    <span class="code-keyword">if</span> node:</span>',
                        '<span class="code-line">        inorder(node.left)   <span class="code-comment"># 遍历左</span></span>',
                        '<span class="code-line">        <span class="code-function">print</span>(node.val)  <span class="code-comment"># 访问根</span></span>',
                        '<span class="code-line">        inorder(node.right)  <span class="code-comment"># 遍历右</span></span>'
                    ]
                },
                {
                    id: 'postorder',
                    name: '后序',
                    python: [
                        '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">postorder</span>(node):</span>',
                        '<span class="code-line">    <span class="code-keyword">if</span> node:</span>',
                        '<span class="code-line">        postorder(node.left)  <span class="code-comment"># 遍历左</span></span>',
                        '<span class="code-line">        postorder(node.right) <span class="code-comment"># 遍历右</span></span>',
                        '<span class="code-line">        <span class="code-function">print</span>(node.val)  <span class="code-comment"># 访问根</span></span>'
                    ]
                },
                {
                    id: 'levelorder',
                    name: '层次',
                    python: [
                        '<span class="code-line"><span class="code-keyword">from</span> collections <span class="code-keyword">import</span> deque</span>',
                        '<span class="code-line"></span>',
                        '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">level_order</span>(root):</span>',
                        '<span class="code-line">    queue = deque([root])</span>',
                        '<span class="code-line">    <span class="code-keyword">while</span> queue:</span>',
                        '<span class="code-line">        node = queue.popleft()</span>',
                        '<span class="code-line">        <span class="code-function">print</span>(node.val)</span>',
                        '<span class="code-line">        <span class="code-keyword">if</span> node.left:</span>',
                        '<span class="code-line">            queue.append(node.left)</span>',
                        '<span class="code-line">        <span class="code-keyword">if</span> node.right:</span>',
                        '<span class="code-line">            queue.append(node.right)</span>'
                    ]
                }
            ],
            generateSteps: (arr) => {
                const steps = [];
                const sortedArr = [...arr].sort((a, b) => a - b);
                
                function buildTree(values, start, end) {
                    if (start > end) return null;
                    const mid = Math.floor((start + end) / 2);
                    const node = { val: values[mid], left: null, right: null };
                    node.left = buildTree(values, start, mid - 1);
                    node.right = buildTree(values, mid + 1, end);
                    return node;
                }
                
                const tree = buildTree(sortedArr, 0, sortedArr.length - 1);
                const variant = state.currentVariant || 'preorder';
                
                if (variant === 'preorder') {
                    // 前序遍历: 根 -> 左 -> 右
                    // 代码行号: 1=def, 2=if, 3=print, 4=left, 5=right
                    const order = [];
                    function preorder(node) {
                        if (!node) return;
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 2, message: `检查节点 ${node.val}` });
                        order.push(node.val);
                        steps.push({ type: 'visit', tree: JSON.parse(JSON.stringify(tree)), current: node.val, order: [...order], line: 3, message: `前序访问: ${node.val} (根→左→右)` });
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 4, message: `遍历左子树: ${node.left ? node.left.val : 'null'}` });
                        preorder(node.left);
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 5, message: `遍历右子树: ${node.right ? node.right.val : 'null'}` });
                        preorder(node.right);
                    }
                    steps.push({ type: 'start', tree: JSON.parse(JSON.stringify(tree)), line: 1, message: '前序遍历: 根 → 左 → 右' });
                    preorder(tree);
                    steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), order: order, line: 5, message: `遍历顺序: ${order.join(' → ')}` });
                } else if (variant === 'inorder') {
                    // 中序遍历: 左 -> 根 -> 右
                    // 代码行号: 1=def, 2=if, 3=left, 4=print, 5=right
                    const order = [];
                    function inorder(node) {
                        if (!node) return;
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 2, message: `检查节点 ${node.val}` });
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 3, message: `遍历左子树: ${node.left ? node.left.val : 'null'}` });
                        inorder(node.left);
                        order.push(node.val);
                        steps.push({ type: 'visit', tree: JSON.parse(JSON.stringify(tree)), current: node.val, order: [...order], line: 4, message: `中序访问: ${node.val} (左→根→右)` });
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 5, message: `遍历右子树: ${node.right ? node.right.val : 'null'}` });
                        inorder(node.right);
                    }
                    steps.push({ type: 'start', tree: JSON.parse(JSON.stringify(tree)), line: 1, message: '中序遍历: 左 → 根 → 右' });
                    inorder(tree);
                    steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), order: order, line: 5, message: `遍历顺序: ${order.join(' → ')}` });
                } else if (variant === 'postorder') {
                    // 后序遍历: 左 -> 右 -> 根
                    // 代码行号: 1=def, 2=if, 3=left, 4=right, 5=print
                    const order = [];
                    function postorder(node) {
                        if (!node) return;
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 2, message: `检查节点 ${node.val}` });
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 3, message: `遍历左子树: ${node.left ? node.left.val : 'null'}` });
                        postorder(node.left);
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), line: 4, message: `遍历右子树: ${node.right ? node.right.val : 'null'}` });
                        postorder(node.right);
                        order.push(node.val);
                        steps.push({ type: 'visit', tree: JSON.parse(JSON.stringify(tree)), current: node.val, order: [...order], line: 5, message: `后序访问: ${node.val} (左→右→根)` });
                    }
                    steps.push({ type: 'start', tree: JSON.parse(JSON.stringify(tree)), line: 1, message: '后序遍历: 左 → 右 → 根' });
                    postorder(tree);
                    steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), order: order, line: 5, message: `遍历顺序: ${order.join(' → ')}` });
                } else if (variant === 'levelorder') {
                    // 层次遍历
                    // 代码行号: 1=import, 3=def, 4=queue, 5=while, 6=popleft, 7=print, 8=if left, 9=append left, 10=if right, 11=append right
                    const queue = [tree];
                    const order = [];
                    steps.push({ type: 'start', tree: JSON.parse(JSON.stringify(tree)), line: 3, message: '层次遍历: 按层从左到右' });
                    steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), queue: [...queue], line: 4, message: '初始化队列' });
                    while (queue.length > 0) {
                        const node = queue.shift();
                        order.push(node.val);
                        steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), queue: [...queue], line: 6, message: `出队: ${node.val}` });
                        steps.push({ type: 'visit', tree: JSON.parse(JSON.stringify(tree)), queue: [...queue], current: node.val, order: [...order], line: 7, message: `访问节点 ${node.val}` });
                        if (node.left) {
                            queue.push(node.left);
                            steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), queue: [...queue], line: 9, message: `左子 ${node.left.val} 入队` });
                        }
                        if (node.right) {
                            queue.push(node.right);
                            steps.push({ type: 'code-line', tree: JSON.parse(JSON.stringify(tree)), queue: [...queue], line: 11, message: `右子 ${node.right.val} 入队` });
                        }
                    }
                    steps.push({ type: 'complete', tree: JSON.parse(JSON.stringify(tree)), order: [...order], line: 11, message: `层序遍历: ${order.join(' → ')}` });
                }
                
                return steps;
            }
        },
        {
            id: 'complete-binary',
            name: '完全二叉树-链式存储',
            nameEn: 'Complete Binary Tree',
            desc: '完全二叉树的链式存储结构',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>完全二叉树</h3>
                    <p>完全二叉树除了最后一层外，每一层都是满的，且最后一层的节点都集中在左边。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">TreeNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.left = <span class="code-keyword">None</span></span>',
                '<span class="code-line">        self.right = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># 完全二叉树的数组表示</span></span>',
                '<span class="code-line"><span class="code-comment"># 父节点: (i-1)//2</span></span>',
                '<span class="code-line"><span class="code-comment"># 左子: 2i+1, 右子: 2i+2</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '构建完全二叉树' });
                arr.slice(0, 7).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `节点 ${val}` });
                    if (i > 0) {
                        const parent = Math.floor((i - 1) / 2);
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `父节点: index ${parent} = ${arr[parent]}` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '完全二叉树构建完成' });
                return steps;
            }
        },
        {
            id: 'huffman',
            name: '哈夫曼树-顺序存储',
            nameEn: 'Huffman Tree',
            desc: '最优二叉树，用于数据压缩',
            complexity: { best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>哈夫曼树</h3>
                    <p>哈夫曼树是带权路径长度最短的二叉树，常用于哈夫曼编码。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">import</span> heapq</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">huffman</span>(weights):</span>',
                '<span class="code-line">    heap = [[w, i] <span class="code-keyword">for</span> i, w <span class="code-keyword">in</span> <span class="code-function">enumerate</span>(weights)]</span>',
                '<span class="code-line">    heapq.heapify(heap)</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> <span class="code-function">len</span>(heap) > <span class="code-number">1</span>:</span>',
                '<span class="code-line">        left = heapq.heappop(heap)</span>',
                '<span class="code-line">        right = heapq.heappop(heap)</span>',
                '<span class="code-line">        parent = [left[<span class="code-number">0</span>]+right[<span class="code-number">0</span>], -<span class="code-number">1</span>]</span>',
                '<span class="code-line">        heapq.heappush(heap, parent)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> heap[<span class="code-number">0</span>][<span class="code-number">0</span>]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const weights = arr.slice(0, 5);
                steps.push({ type: 'init', array: [...weights], line: 0, message: `权重: [${weights.join(', ')}]` });
                
                for (let i = 0; i < weights.length - 1; i++) {
                    weights.sort((a, b) => a - b);
                    const left = weights.shift();
                    const right = weights.shift();
                    const parent = left + right;
                    steps.push({ type: 'compare', array: [...weights], line: 1, message: `选择最小: ${left} 和 ${right}` });
                    weights.unshift(parent);
                    steps.push({ type: 'code-line', array: [...weights], line: 2, message: `合并: ${left}+${right}=${parent}` });
                }
                
                steps.push({ type: 'complete', array: [...weights], line: 3, message: `WPL = ${weights[0]}` });
                return steps;
            }
        },
        {
            id: 'threaded',
            name: '线索二叉树',
            nameEn: 'Threaded Binary Tree',
            desc: '利用空指针存储遍历线索',
            complexity: { best: 'O(n)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>线索二叉树</h3>
                    <p>将二叉树中的空指针改为指向节点前驱或后继的线索，方便快速遍历。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">ThreadNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.ltag = <span class="code-number">0</span>  <span class="code-comment"># 0:孩子, 1:线索</span></span>',
                '<span class="code-line">        self.rtag = <span class="code-number">0</span></span>',
                '<span class="code-line">        self.left = self.right = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># 中序线索化</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">inorder_thread</span>(root):</span>',
                '<span class="code-line">    pre = <span class="code-keyword">None</span></span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">thread</span>(node):</span>',
                '<span class="code-line">        <span class="code-keyword">nonlocal</span> pre</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> node:</span>',
                '<span class="code-line">            <span class="code-function">thread</span>(node.left)</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> <span class="code-keyword">not</span> node.left:</span>',
                '<span class="code-line">                node.left = pre; node.ltag = <span class="code-number">1</span></span>',
                '<span class="code-line">            <span class="code-keyword">if</span> pre <span class="code-keyword">and</span> <span class="code-keyword">not</span> pre.right:</span>',
                '<span class="code-line">                pre.right = node; pre.rtag = <span class="code-number">1</span></span>',
                '<span class="code-line">            pre = node</span>',
                '<span class="code-line">            <span class="code-function">thread</span>(node.right)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '中序线索化二叉树' });
                arr.slice(0, 5).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `处理节点 ${val}` });
                    if (i > 0) {
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `建立前驱线索` });
                    }
                    if (i < arr.length - 1) {
                        steps.push({ type: 'code-line', array: [...arr], line: 3, message: `建立后继线索` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '线索二叉树构建完成' });
                return steps;
            }
        },
        {
            id: 'avl',
            name: 'AVL平衡二叉树',
            nameEn: 'AVL Tree',
            desc: '自平衡的二叉搜索树，任意节点左右子树高度差不超过1',
            complexity: { best: 'O(log n)', avg: 'O(log n)', worst: 'O(log n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>AVL树</h3>
                    <p>AVL树是最早提出的自平衡二叉搜索树，通过旋转操作保持平衡。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">AVLNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.bf = <span class="code-number">0</span>  <span class="code-comment"># 平衡因子</span></span>',
                '<span class="code-line">        self.left = self.right = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># LL旋转</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">ll_rotate</span>(y):</span>',
                '<span class="code-line">    x = y.left</span>',
                '<span class="code-line">    y.left = x.right</span>',
                '<span class="code-line">    x.right = y</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> x</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># RR旋转</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">rr_rotate</span>(y):</span>',
                '<span class="code-line">    x = y.right</span>',
                '<span class="code-line">    y.right = x.left</span>',
                '<span class="code-line">    x.left = y</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> x</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '构建AVL树' });
                arr.slice(0, 5).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `插入 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `BST插入` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `计算平衡因子` });
                    if (i > 2) {
                        steps.push({ type: 'code-line', array: [...arr], line: 4, message: `检查是否失衡, 可能需要旋转` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 5, message: 'AVL树平衡完成' });
                return steps;
            }
        },
        {
            id: 'tree-parent',
            name: '树存储结构-双亲表示法',
            nameEn: 'Tree - Parent Representation',
            desc: '用数组存储每个节点的父节点索引',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>双亲表示法</h3>
                    <p>每个节点存储其父节点的索引，适合查找父节点操作。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">PTNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, data, parent=-<span class="code-number">1</span>):</span>',
                '<span class="code-line">        self.data = data</span>',
                '<span class="code-line">        self.parent = parent</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">ParentTree</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, nodes):</span>',
                '<span class="code-line">        self.nodes = nodes</span>',
                '<span class="code-line">    </span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">find_parent</span>(self, i):</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> self.nodes[i].parent</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '双亲表示法数组' });
                arr.slice(0, 6).forEach((val, i) => {
                    const parent = i === 0 ? -1 : Math.floor((i - 1) / 3);
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `index ${i}: data=${val}, parent=${parent}` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 2, message: '双亲表示法完成' });
                return steps;
            }
        },
        {
            id: 'tree-child',
            name: '树存储结构-孩子表示法',
            nameEn: 'Tree - Child Representation',
            desc: '每个节点存储所有孩子节点的索引',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>孩子表示法</h3>
                    <p>每个节点用链表存储所有孩子节点的索引，适合查找孩子节点。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">CTNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, child, next=<span class="code-keyword">None</span>):</span>',
                '<span class="code-line">        self.child = child</span>',
                '<span class="code-line">        self.next = next</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">ChildTree</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, n):</span>',
                '<span class="code-line">        self.firstchild = [None]*n</span>',
                '<span class="code-line">        self.data = [<span class="code-keyword">None</span>]*n</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '孩子表示法' });
                arr.slice(0, 5).forEach((val, i) => {
                    const children = [];
                    for (let j = i * 3 + 1; j <= Math.min(i * 3 + 3, arr.length - 1); j++) {
                        children.push(j);
                    }
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `${val}: 孩子 ${children.length > 0 ? children.join(',') : '无'}` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 2, message: '孩子表示法完成' });
                return steps;
            }
        },
        {
            id: 'tree-child-sibling',
            name: '树存储结构-孩子兄弟表示法',
            nameEn: 'Tree - Child-Sibling Representation',
            desc: '每个节点存储第一个孩子和下一个兄弟',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>孩子兄弟表示法</h3>
                    <p>任何树都可以用二叉树表示，每个节点存储第一个孩子和下一个兄弟。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">CSNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, val):</span>',
                '<span class="code-line">        self.val = val</span>',
                '<span class="code-line">        self.firstchild = <span class="code-keyword">None</span>  <span class="code-comment"># 第一个孩子</span></span>',
                '<span class="code-line">        self.nextsibling = <span class="code-keyword">None</span>  <span class="code-comment"># 下一个兄弟</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># 树转二叉树</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">tree_to二叉树</span>(root):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> root:</span>',
                '<span class="code-line">        root.firstchild = root.child</span>',
                '<span class="code-line">        root.nextsibling = root.next</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '孩子兄弟表示法' });
                arr.slice(0, 5).forEach((val, i) => {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `节点 ${val}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `firstchild = 第一个孩子` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `nextsibling = 下一个兄弟` });
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '孩子兄弟表示法完成' });
                return steps;
            }
        }
    ],


    // ===== 数组 =====
    array: [
        {
            id: 'matrix-basic',
            name: '数组-存储结构',
            nameEn: '2D Array Storage',
            desc: '二维数组的行优先和列优先存储',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>存储方式</h3>
                    <p>二维数组可以按行优先(C语言)或列优先(Fortran)存储为一维数组。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-comment"># 行优先存储: A[i][j] 的地址</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">row_addr</span>(i, j, m, n, base):</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> base + (i*n + j) * ElemSize</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-comment"># 列优先存储: A[i][j] 的地址</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">col_addr</span>(i, j, m, n, base):</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> base + (j*m + i) * ElemSize</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const m = 3, n = 3;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `二维数组 ${m}×${n}` });
                for (let i = 0; i < m; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...arr], line: 1, message: `行 ${i}` });
                    for (let j = 0; j < n; j++) {
                        const idx = i * n + j;
                        steps.push({ type: 'visit', indices: [idx], array: [...arr], line: 2, message: `A[${i}][${j}] → 一维[${idx}]` });
                    }
                }
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '行优先存储完成' });
                return steps;
            }
        },
        {
            id: 'symmetric-matrix',
            name: '压缩存储-对称矩阵',
            nameEn: 'Symmetric Matrix',
            desc: '只存储下三角区域，节省一半空间',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n²/2)' },
            theory: `
                <div class="theory-section">
                    <h3>对称矩阵压缩</h3>
                    <p>对称矩阵 A[i][j] = A[j][i]，只需存储下三角部分(含对角线)。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-comment"># 对称矩阵压缩存储</span></span>',
                '<span class="code-line"><span class="code-comment"># A[i][j] 对应 B[k], k = i*(i+1)/2 + j</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">sym_get</span>(B, i, j):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> i >= j:</span>',
                '<span class="code-line">        k = i*(i+<span class="code-number">1</span>)//<span class="code-number">2</span> + j</span>',
                '<span class="code-line">    <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">        k = j*(j+<span class="code-number">1</span>)//<span class="code-number">2</span> + i</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> B[k]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 4;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `${n}×${n} 对称矩阵` });
                let k = 0;
                for (let i = 0; i < n; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...arr], line: 1, message: `行 ${i}` });
                    for (let j = 0; j <= i; j++) {
                        steps.push({ type: 'visit', indices: [k], array: [...arr], line: 2, message: `B[${k}] = A[${i}][${j}]` });
                        k++;
                    }
                }
                steps.push({ type: 'complete', array: [...arr], line: 3, message: `压缩存储完成, 共 ${k} 个元素` });
                return steps;
            }
        },
        {
            id: 'triangular-matrix',
            name: '压缩存储-三角矩阵',
            nameEn: 'Triangular Matrix',
            desc: '下三角或上三角矩阵的压缩存储',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(n²/2)' },
            theory: `
                <div class="theory-section">
                    <h3>三角矩阵</h3>
                    <p>下三角矩阵或上三角矩阵，一半是常数c，一半是数据。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-comment"># 下三角矩阵压缩存储</span></span>',
                '<span class="code-line"><span class="code-comment"># 元素个数: n*(n+1)/2 + 1</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">tri_get</span>(B, i, j, c):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> i >= j:</span>',
                '<span class="code-line">        k = i*(i+<span class="code-number">1</span>)//<span class="code-number">2</span> + j</span>',
                '<span class="code-line">    <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">        k = n*(n+<span class="code-number">1</span>)//<span class="code-number">2</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> B[k] <span class="code-comment"># c存在最后</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 4;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `${n}×${n} 下三角矩阵` });
                let k = 0;
                for (let i = 0; i < n; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...arr], line: 1, message: `行 ${i}` });
                    for (let j = 0; j <= i; j++) {
                        steps.push({ type: 'visit', indices: [k], array: [...arr], line: 2, message: `B[${k}] = ${arr[k]}` });
                        k++;
                    }
                }
                steps.push({ type: 'code-line', array: [...arr], line: 3, message: `B[${k}] = 常数c (上三角)` });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '三角矩阵压缩完成' });
                return steps;
            }
        },
        {
            id: 'tridiagonal',
            name: '压缩存储-三对角矩阵',
            nameEn: 'Tridiagonal Matrix',
            desc: '只有主对角线和相邻对角线上有元素',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)', space: 'O(3n-2)' },
            theory: `
                <div class="theory-section">
                    <h3>三对角矩阵</h3>
                    <p>三对角矩阵只在主对角线及其上下相邻的对角线上有非零元素。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-comment"># 三对角矩阵压缩存储</span></span>',
                '<span class="code-line"><span class="code-comment"># B[k] = A[i][j], k = 2*i + j - 1</span></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">tri_diag_get</span>(B, i, j):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> <span class="code-function">abs</span>(i-j) > <span class="code-number">1</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> <span class="code-number">0</span></span>',
                '<span class="code-line">    k = <span class="code-number">2</span>*i + j - <span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> B[k]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 4;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `${n}×${n} 三对角矩阵` });
                let k = 0;
                for (let i = 0; i < n; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...arr], line: 1, message: `行 ${i}` });
                    for (let j = Math.max(0, i-1); j <= Math.min(n-1, i+1); j++) {
                        steps.push({ type: 'visit', indices: [k], array: [...arr], line: 2, message: `B[${k}] = A[${i}][${j}]` });
                        k++;
                    }
                }
                steps.push({ type: 'complete', array: [...arr], line: 3, message: `共 ${k} 个元素 (原${n*n})` });
                return steps;
            }
        },
        {
            id: 'sparse-matrix',
            name: '稀疏矩阵-十字链表',
            nameEn: 'Sparse Matrix Cross List',
            desc: '使用十字链表存储非零元素',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)', space: 'O(k)' },
            theory: `
                <div class="theory-section">
                    <h3>十字链表</h3>
                    <p>每个非零元素节点同时链接到所在行和所在列的两个链表中。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">OLNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, i, j, e):</span>',
                '<span class="code-line">        self.row = i</span>',
                '<span class="code-line">        self.col = j</span>',
                '<span class="code-line">        self.val = e</span>',
                '<span class="code-line">        self.right = <span class="code-keyword">None</span>  <span class="code-comment"># 行指针</span></span>',
                '<span class="code-line">        self.down = <span class="code-keyword">None</span>    <span class="code-comment"># 列指针</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '创建十字链表头指针向量' });
                const nonzero = arr.filter(v => v !== 0).length;
                arr.forEach((val, i) => {
                    if (val !== 0) {
                        steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `节点: (row,col,${val})` });
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `链接到行链表` });
                        steps.push({ type: 'code-line', array: [...arr], line: 3, message: `链接到列链表` });
                    }
                });
                steps.push({ type: 'complete', array: [...arr], line: 4, message: `共 ${nonzero} 个非零元素` });
                return steps;
            }
        }
    ],

    // ===== 串 =====
    string: [
        {
            id: 'bf-match',
            name: '朴素模式匹配',
            nameEn: 'Brute Force',
            desc: '暴力匹配，逐个字符比较',
            complexity: { best: 'O(n)', avg: 'O(nm)', worst: 'O(nm)', space: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>朴素匹配</h3>
                    <p>从主串的每个位置开始，尝试与模式串匹配，失败则回溯到下一个位置。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bf_match</span>(S, P):</span>',
                '<span class="code-line">    i, j = <span class="code-number">0</span>, <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> i < <span class="code-function">len</span>(S) <span class="code-keyword">and</span> j < <span class="code-function">len</span>(P):</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> S[i] == P[j]:</span>',
                '<span class="code-line">            i += <span class="code-number">1</span></span>',
                '<span class="code-line">            j += <span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            i = i - j + <span class="code-number">1</span></span>',
                '<span class="code-line">            j = <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> i - j <span class="code-keyword">if</span> j == <span class="code-function">len</span>(P) <span class="code-keyword">else</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const S = 'ababcabababc';
                const P = 'abc';
                steps.push({ type: 'init', array: [...arr], line: 0, message: `S="${S}", P="${P}"` });
                for (let i = 0; i < Math.min(S.length, 5); i++) {
                    steps.push({ type: 'loop-start', array: [...arr], line: 1, message: `从位置 ${i} 开始匹配` });
                    for (let j = 0; j < P.length; j++) {
                        const match = S[i+j] === P[j];
                        steps.push({ type: 'compare', indices: [i], array: [...arr], line: 2, message: `S[${i+j}]='${S[i+j]}' ${match ? '==' : '!='} P[${j}]='${P[j]}'` });
                        if (!match) {
                            steps.push({ type: 'code-line', array: [...arr], line: 3, message: `不匹配,i回退` });
                            break;
                        }
                    }
                }
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '朴素匹配完成' });
                return steps;
            }
        },
        {
            id: 'kmp',
            name: 'KMP算法',
            nameEn: 'KMP Algorithm',
            desc: '利用已匹配信息，避免不必要的回溯',
            complexity: { best: 'O(n)', avg: 'O(n+m)', worst: 'O(n+m)', space: 'O(m)' },
            theory: `
                <div class="theory-section">
                    <h3>KMP算法</h3>
                    <p>当匹配失败时，利用已匹配的前缀信息，将模式串向右滑动到合适位置，而不是回溯主串。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">get_next</span>(P):</span>',
                '<span class="code-line">    next = [<span class="code-number">0</span>] * <span class="code-function">len</span>(P)</span>',
                '<span class="code-line">    i, j = <span class="code-number">0</span>, -<span class="code-number">1</span></span>',
                '<span class="code-line">    next[<span class="code-number">0</span>] = -<span class="code-number">1</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> i < <span class="code-function">len</span>(P)-<span class="code-number">1</span>:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> j==-<span class="code-number">1</span> <span class="code-keyword">or</span> P[i]==P[j]:</span>',
                '<span class="code-line">            i, j = i+<span class="code-number">1</span>, j+<span class="code-number">1</span></span>',
                '<span class="code-line">            next[i] = j</span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            j = next[j]</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">kmp_match</span>(S, P):</span>',
                '<span class="code-line">    next = <span class="code-function">get_next</span>(P)</span>',
                '<span class="code-line">    i, j = <span class="code-number">0</span>, <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">while</span> i < <span class="code-function">len</span>(S) <span class="code-keyword">and</span> j < <span class="code-function">len</span>(P):</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> j==-<span class="code-number">1</span> <span class="code-keyword">or</span> S[i]==P[j]:</span>',
                '<span class="code-line">            i, j = i+<span class="code-number">1</span>, j+<span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">else</span>:</span>',
                '<span class="code-line">            j = next[j]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> i-j <span class="code-keyword">if</span> j==<span class="code-function">len</span>(P) <span class="code-keyword">else</span> -<span class="code-number">1</span></span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const P = 'ababa';
                steps.push({ type: 'init', array: [...arr], line: 0, message: `P="${P}", 计算next数组` });
                
                // 构建next数组
                const next = [0];
                steps.push({ type: 'code-line', array: [...arr], line: 1, message: 'next[0] = -1' });
                for (let i = 1; i < P.length; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...arr], line: 2, message: `计算next[${i}]` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `next[${i}] = ${next[i-1] + 1 || 0}` });
                    next.push(next[i-1] + 1 || 0);
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 4, message: `next = [${next.join(',')}]` });
                return steps;
            }
        }
    ],

    graph: [
        {
            id: 'bfs',
            name: 'BFS 广度优先',
            nameEn: 'Breadth-First Search',
            desc: '从起点开始，逐层访问图中所有顶点',
            complexity: { best: 'O(V+E)', avg: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>BFS使用队列来遍历图，从起点开始，先访问所有相邻顶点，再依次访问这些顶点的相邻顶点，像波浪一样逐层扩散。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>将起点加入队列</li>
                        <li>从队列取出一个顶点，标记为已访问</li>
                        <li>将该顶点的所有未访问邻居加入队列</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">BFS</span>(graph, start)</span>',
                '<span class="code-line" data-line="1">    visited ← empty set</span>',
                '<span class="code-line" data-line="2">    queue ← empty queue</span>',
                '<span class="code-line" data-line="3">    queue.enqueue(start)</span>',
                '<span class="code-line" data-line="4">    <span class="code-keyword">while</span> queue not empty <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="5">        node ← queue.dequeue()</span>',
                '<span class="code-line" data-line="6">        visit(node)</span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">for each</span> neighbor <span class="code-keyword">of</span> node <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="8">            <span class="code-keyword">if</span> neighbor not in visited <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="9">                queue.enqueue(neighbor)</span>',
                '<span class="code-line" data-line="10">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="11">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="12">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="13"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">from</span> collections <span class="code-keyword">import</span> deque</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bfs</span>(graph, start):</span>',
                '<span class="code-line">    visited = <span class="code-function">set</span>()</span>',
                '<span class="code-line">    queue = deque([start])</span>',
                '<span class="code-line">    visited.add(start)</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> queue:</span>',
                '<span class="code-line">        node = queue.popleft()</span>',
                '<span class="code-line">        <span class="code-function">print</span>(node)</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> neighbor <span class="code-keyword">in</span> graph[node]:</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> neighbor <span class="code-keyword">not in</span> visited:</span>',
                '<span class="code-line">                visited.add(neighbor)</span>',
                '<span class="code-line">                queue.append(neighbor)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const graph = {
                    0: [1, 2], 1: [0, 3, 4],
                    2: [0, 4], 3: [1], 4: [1, 2, 5], 5: [4]
                };
                const visited = new Set();
                const queue = [0];
                visited.add(0);
                steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], line: 4, message: 'visited = set()' });
                steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], line: 5, message: 'queue = deque([start])' });
                steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], line: 6, message: 'visited.add(start)' });
                while (queue.length > 0) {
                    steps.push({ type: 'loop-start', graph, visited: [...visited], queue: [...queue], line: 7, message: `while queue: ${queue.join(', ')}` });
                    const node = queue.shift();
                    steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], current: node, line: 8, message: `node = queue.popleft() = ${node}` });
                    steps.push({ type: 'visit', graph, visited: [...visited], queue: [...queue], current: node, line: 9, message: `访问节点 ${node}` });
                    for (const neighbor of graph[node]) {
                        steps.push({ type: 'loop-start', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 10, message: `检查邻居 ${neighbor}` });
                        if (!visited.has(neighbor)) {
                            steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 11, message: `${neighbor} not in visited` });
                            visited.add(neighbor);
                            queue.push(neighbor);
                            steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], neighbor, line: 12, message: `visited.add(${neighbor})` });
                            steps.push({ type: 'enqueue', graph, visited: [...visited], queue: [...queue], neighbor, line: 13, message: `queue.append(${neighbor})` });
                        } else {
                            steps.push({ type: 'code-line', graph, visited: [...visited], queue: [...queue], current: node, neighbor, line: 11, message: `${neighbor} already visited` });
                        }
                    }
                    steps.push({ type: 'loop-end', graph, visited: [...visited], queue: [...queue], current: node, line: 10, message: 'for结束' });
                }
                steps.push({ type: 'loop-end', graph, visited: [...visited], queue: [], line: 7, message: 'while结束' });
                steps.push({ type: 'complete', graph, visited: [...visited], queue: [], line: 7, message: `BFS完成，顺序: ${[...visited]}` });
                return steps;
            }
        },
        {
            id: 'dfs',
            name: 'DFS 深度优先',
            nameEn: 'Depth-First Search',
            desc: '沿着一条路径走到底，然后回溯继续探索',
            complexity: { best: 'O(V+E)', avg: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>DFS像走迷宫一样，沿着一条路径一直走下去，直到走不通再回溯换一条路。它使用栈（或递归）来实现。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>从起点开始，标记为已访问</li>
                        <li>选择一个未访问的邻居，深入访问</li>
                        <li>如果没有未访问的邻居，回溯到上一个节点</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">DFS</span>(graph, start, visited)</span>',
                '<span class="code-line" data-line="1">    visited.add(start)</span>',
                '<span class="code-line" data-line="2">    visit(start)</span>',
                '<span class="code-line" data-line="3">    <span class="code-keyword">for each</span> neighbor <span class="code-keyword">of</span> start <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">        <span class="code-keyword">if</span> neighbor not in visited <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="5">            DFS(graph, neighbor, visited)</span>',
                '<span class="code-line" data-line="6">        <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="7">    <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="8"><span class="code-keyword">end procedure</span></span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">dfs</span>(graph, start, visited=<span class="code-keyword">None</span>):</span>',
                '<span class="code-line">    <span class="code-keyword">if</span> visited <span class="code-keyword">is None</span>:</span>',
                '<span class="code-line">        visited = <span class="code-function">set</span>()</span>',
                '<span class="code-line">    visited.add(start)</span>',
                '<span class="code-line">    <span class="code-function">print</span>(start)</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> neighbor <span class="code-keyword">in</span> graph[start]:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> neighbor <span class="code-keyword">not in</span> visited:</span>',
                '<span class="code-line">            dfs(graph, neighbor, visited)</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const graph = {
                    0: [1, 2], 1: [0, 3, 4],
                    2: [0, 4], 3: [1], 4: [1, 2, 5], 5: [4]
                };
                const visited = new Set();
                const stack = [0];
                steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], line: 1, message: '初始化 visited' });
                while (stack.length > 0) {
                    const node = stack.pop();
                    if (!visited.has(node)) {
                        visited.add(node);
                        steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, line: 4, message: `visited.add(${node})` });
                        steps.push({ type: 'visit', graph, visited: [...visited], stack: [...stack], current: node, line: 5, message: `访问节点 ${node}` });
                        const unvisited = graph[node].filter(n => !visited.has(n)).reverse();
                        for (const neighbor of unvisited) {
                            steps.push({ type: 'loop-start', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 6, message: `检查邻居 ${neighbor}` });
                            if (!visited.has(neighbor)) {
                                steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 7, message: `${neighbor} not in visited` });
                                stack.push(neighbor);
                                steps.push({ type: 'push', graph, visited: [...visited], stack: [...stack], neighbor, line: 8, message: `DFS(${neighbor})` });
                            } else {
                                steps.push({ type: 'code-line', graph, visited: [...visited], stack: [...stack], current: node, neighbor, line: 7, message: `${neighbor} already visited` });
                            }
                        }
                        steps.push({ type: 'loop-end', graph, visited: [...visited], stack: [...stack], current: node, line: 6, message: 'for结束' });
                    }
                }
                steps.push({ type: 'complete', graph, visited: [...visited], stack: [], line: 6, message: `DFS完成，顺序: ${[...visited]}` });
                return steps;
            }
        },
        {
            id: 'dijkstra',
            name: 'Dijkstra 最短路径',
            nameEn: "Dijkstra's Algorithm",
            desc: '计算单源最短路径',
            complexity: { best: 'O((V+E) log V)', avg: 'O((V+E) log V)', worst: 'O((V+E) log V)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>Dijkstra算法使用贪心策略，从起点开始，逐步扩展已知最短路径的顶点集合。每次选择当前距离最小的未访问顶点。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤</h3>
                    <ul>
                        <li>初始化距离数组，起点距离为0，其他为无穷大</li>
                        <li>使用优先队列，弹出当前距离最小的顶点</li>
                        <li>更新该顶点的邻居距离</li>
                        <li>重复直到所有顶点都被访问</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">Dijkstra</span>(graph, start)</span>',
                '<span class="code-line" data-line="1">    dist ← array initialized to ∞</span>',
                '<span class="code-line" data-line="2">    dist[start] ← <span class="code-number">0</span></span>',
                '<span class="code-line" data-line="3">    visited ← empty set</span>',
                '<span class="code-line" data-line="4">    <span class="code-keyword">while</span> visited.size < V <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="5">        u ← vertex with min dist not in visited</span>',
                '<span class="code-line" data-line="6">        visited.add(u)</span>',
                '<span class="code-line" data-line="7">        <span class="code-keyword">for each</span> neighbor v <span class="code-keyword">of</span> u <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="8">            alt ← dist[u] + weight(u,v)</span>',
                '<span class="code-line" data-line="9">            <span class="code-keyword">if</span> alt < dist[v] <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="10">                dist[v] ← alt</span>',
                '<span class="code-line" data-line="11">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="12">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="13">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="14">    <span class="code-keyword">return</span> dist</span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">import</span> heapq</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">dijkstra</span>(graph, start):</span>',
                '<span class="code-line">    dist = {v: <span class="code-function">float</span>(<span class="code-string">\'inf\'</span>) <span class="code-keyword">for</span> v <span class="code-keyword">in</span> graph}</span>',
                '<span class="code-line">    dist[start] = <span class="code-number">0</span></span>',
                '<span class="code-line">    pq = [(<span class="code-number">0</span>, start)]</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> pq:</span>',
                '<span class="code-line">        d, u = heapq.heappop(pq)</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> d > dist[u]:</span>',
                '<span class="code-line">            <span class="code-keyword">continue</span></span>',
                '<span class="code-line">        <span class="code-keyword">for</span> v, w <span class="code-keyword">in</span> graph[u]:</span>',
                '<span class="code-line">            alt = dist[u] + w</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> alt < dist[v]:</span>',
                '<span class="code-line">                dist[v] = alt</span>',
                '<span class="code-line">                heapq.heappush(pq, (alt, v))</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> dist</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const graph = {
                    0: [[1, 4], [2, 2]],
                    1: [[3, 6], [4, 3]],
                    2: [[1, 1], [3, 3], [4, 5]],
                    3: [[4, 2]],
                    4: []
                };
                const vertices = Object.keys(graph).map(Number);
                const dist = {};
                const visited = new Set();
                vertices.forEach(v => dist[v] = Infinity);
                dist[0] = 0;
                
                steps.push({ type: 'start', graph, dist: {...dist}, visited: [], line: 0, message: 'Dijkstra算法开始' });
                steps.push({ type: 'code-line', graph, dist: {...dist}, visited: [], line: 1, message: '初始化距离数组' });
                steps.push({ type: 'code-line', graph, dist: {...dist}, visited: [], line: 2, message: `dist[0] = 0` });
                steps.push({ type: 'code-line', graph, dist: {...dist}, visited: [], line: 3, message: 'visited = ∅' });
                
                while (visited.size < vertices.length) {
                    let u = -1, minDist = Infinity;
                    for (const v of vertices) {
                        if (!visited.has(v) && dist[v] < minDist) {
                            minDist = dist[v];
                            u = v;
                        }
                    }
                    
                    if (u === -1) break;
                    
                    visited.add(u);
                    steps.push({ type: 'visit', graph, dist: {...dist}, visited: [...visited], current: u, line: 5, message: `选择顶点 ${u}，距离 = ${dist[u]}` });
                    steps.push({ type: 'code-line', graph, dist: {...dist}, visited: [...visited], current: u, line: 6, message: `visited 添加 ${u}` });
                    
                    for (const [v, w] of graph[u]) {
                        const alt = dist[u] + w;
                        steps.push({ type: 'code-line', graph, dist: {...dist}, visited: [...visited], current: u, neighbor: v, line: 7, message: `检查边 ${u}→${v}，权重=${w}` });
                        steps.push({ type: 'code-line', graph, dist: {...dist}, visited: [...visited], current: u, neighbor: v, line: 8, message: `alt = ${dist[u]} + ${w} = ${alt}` });
                        
                        if (alt < dist[v]) {
                            dist[v] = alt;
                            steps.push({ type: 'update', graph, dist: {...dist}, visited: [...visited], current: u, neighbor: v, line: 10, message: `更新 dist[${v}] = ${alt}` });
                        }
                    }
                }
                
                const result = Object.entries(dist).map(([k, v]) => `${k}:${v}`).join(', ');
                steps.push({ type: 'complete', graph, dist: {...dist}, visited: [...visited], line: 14, message: `最短路径: ${result}` });
                return steps;
            }
        },
        {
            id: 'topo-sort',
            name: '拓扑排序',
            nameEn: 'Topological Sort',
            desc: '对有向无环图进行排序',
            complexity: { best: 'O(V+E)', avg: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>算法原理</h3>
                    <p>拓扑排序用于对有向无环图(DAG)进行排序，使得所有有向边都从排在前面的元素指向后面的元素。</p>
                </div>
                <div class="theory-section">
                    <h3>算法步骤 (Kahn算法)</h3>
                    <ul>
                        <li>计算所有顶点的入度</li>
                        <li>将入度为0的顶点入队</li>
                        <li>出队一个顶点，添加到结果</li>
                        <li>更新邻居的入度，将入度变为0的顶点入队</li>
                    </ul>
                </div>
            `,
            pseudocode: [
                '<span class="code-line" data-line="0"><span class="code-keyword">procedure</span> <span class="code-function">TopoSort</span>(graph)</span>',
                '<span class="code-line" data-line="1">    indegree ← array of <span class="code-number">0</span></span>',
                '<span class="code-line" data-line="2">    <span class="code-keyword">for each</span> vertex u <span class="code-keyword">in</span> graph <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="3">        <span class="code-keyword">for each</span> neighbor v <span class="code-keyword">of</span> u <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="4">            indegree[v] ← indegree[v] + <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="5">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="6">    queue ← vertices with indegree <span class="code-number">0</span></span>',
                '<span class="code-line" data-line="7">    result ← empty list</span>',
                '<span class="code-line" data-line="8">    <span class="code-keyword">while</span> queue not empty <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="9">        u ← queue.dequeue()</span>',
                '<span class="code-line" data-line="10">        result.append(u)</span>',
                '<span class="code-line" data-line="11">        <span class="code-keyword">for each</span> neighbor v <span class="code-keyword">of</span> u <span class="code-keyword">do</span></span>',
                '<span class="code-line" data-line="12">            indegree[v] ← indegree[v] - <span class="code-number">1</span></span>',
                '<span class="code-line" data-line="13">            <span class="code-keyword">if</span> indegree[v] = <span class="code-number">0</span> <span class="code-keyword">then</span></span>',
                '<span class="code-line" data-line="14">                queue.enqueue(v)</span>',
                '<span class="code-line" data-line="15">            <span class="code-keyword">end if</span></span>',
                '<span class="code-line" data-line="16">        <span class="code-keyword">end for</span></span>',
                '<span class="code-line" data-line="17">    <span class="code-keyword">end while</span></span>',
                '<span class="code-line" data-line="18">    <span class="code-keyword">return</span> result</span>'
            ],
            python: [
                '<span class="code-line"><span class="code-keyword">from</span> collections <span class="code-keyword">import</span> deque</span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">topo_sort</span>(graph):</span>',
                '<span class="code-line">    indegree = {v: <span class="code-number">0</span> <span class="code-keyword">for</span> v <span class="code-keyword">in</span> graph}</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> u <span class="code-keyword">in</span> graph:</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> v <span class="code-keyword">in</span> graph[u]:</span>',
                '<span class="code-line">            indegree[v] += <span class="code-number">1</span></span>',
                '<span class="code-line">    queue = deque([v <span class="code-keyword">for</span> v <span class="code-keyword">in</span> indegree <span class="code-keyword">if</span> indegree[v] == <span class="code-number">0</span>])</span>',
                '<span class="code-line">    result = []</span>',
                '<span class="code-line">    <span class="code-keyword">while</span> queue:</span>',
                '<span class="code-line">        u = queue.popleft()</span>',
                '<span class="code-line">        result.append(u)</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> v <span class="code-keyword">in</span> graph[u]:</span>',
                '<span class="code-line">            indegree[v] -= <span class="code-number">1</span></span>',
                '<span class="code-line">            <span class="code-keyword">if</span> indegree[v] == <span class="code-number">0</span>:</span>',
                '<span class="code-line">                queue.append(v)</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> result</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const graph = {
                    0: [2, 3],
                    1: [3, 4],
                    2: [3],
                    3: [4],
                    4: []
                };
                const vertices = Object.keys(graph).map(Number);
                const indegree = {};
                vertices.forEach(v => indegree[v] = 0);
                
                for (const u of vertices) {
                    for (const v of graph[u]) {
                        indegree[v]++;
                    }
                }
                
                steps.push({ type: 'code-line', graph, indegree: {...indegree}, line: 0, message: '拓扑排序开始' });
                steps.push({ type: 'code-line', graph, indegree: {...indegree}, line: 1, message: '计算入度' });
                
                const queue = vertices.filter(v => indegree[v] === 0);
                steps.push({ type: 'code-line', graph, indegree: {...indegree}, queue: [...queue], line: 6, message: `入度为0的顶点: ${queue.join(', ')}` });
                
                const result = [];
                while (queue.length > 0) {
                    const u = queue.shift();
                    result.push(u);
                    steps.push({ type: 'visit', graph, indegree: {...indegree}, queue: [...queue], result: [...result], current: u, line: 8, message: `出队: ${u}` });
                    steps.push({ type: 'code-line', graph, indegree: {...indegree}, queue: [...queue], result: [...result], current: u, line: 10, message: `添加到结果` });
                    
                    for (const v of graph[u]) {
                        indegree[v]--;
                        steps.push({ type: 'code-line', graph, indegree: {...indegree}, queue: [...queue], result: [...result], current: u, neighbor: v, line: 11, message: `indegree[${v}] = ${indegree[v]}` });
                        
                        if (indegree[v] === 0) {
                            queue.push(v);
                            steps.push({ type: 'enqueue', graph, indegree: {...indegree}, queue: [...queue], result: [...result], current: u, neighbor: v, line: 14, message: `${v} 入度为0，入队` });
                        }
                    }
                }
                
                steps.push({ type: 'complete', graph, indegree: {...indegree}, queue: [], result: [...result], line: 18, message: `拓扑排序: ${result.join(' → ')}` });
                return steps;
            }
        },
        {
            id: 'adj-matrix',
            name: '存储结构-邻接矩阵',
            nameEn: 'Adjacency Matrix',
            desc: '使用二维数组表示图的连接关系',
            complexity: { best: 'O(1)', avg: 'O(1)', worst: 'O(1)' },
            theory: `
                <div class="theory-section">
                    <h3>邻接矩阵</h3>
                    <p>用二维数组matrix[i][j]表示顶点i到j是否有边，适合稠密图。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">create_matrix</span>(n, edges):</span>',
                '<span class="code-line">    matrix = [[<span class="code-number">0</span>]*n <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-function">range</span>(n)]</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> i, j, w <span class="code-keyword">in</span> edges:</span>',
                '<span class="code-line">        matrix[i][j] = w</span>',
                '<span class="code-line">        matrix[j][i] = w  <span class="code-comment"># 无向图</span></span>',
                '<span class="code-line">    <span class="code-keyword">return</span> matrix</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 4;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `创建 ${n}×${n} 邻接矩阵` });
                
                for (let i = 0; i < n; i++) {
                    steps.push({ type: 'loop-start', indices: [i], array: [...arr], line: 1, message: `行 ${i}` });
                    for (let j = 0; j < n; j++) {
                        const weight = (i === j) ? 0 : (arr[i] + arr[j]) % 10;
                        steps.push({ type: 'visit', indices: [i, j], array: [...arr], line: 2, message: `matrix[${i}][${j}] = ${weight}` });
                    }
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '邻接矩阵构建完成' });
                return steps;
            }
        },
        {
            id: 'adj-list',
            name: '存储结构-邻接表',
            nameEn: 'Adjacency List',
            desc: '用链表数组表示图的连接关系',
            complexity: { best: 'O(1)', avg: 'O(n)', worst: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>邻接表</h3>
                    <p>对每个顶点建立一个单链表，存储其所有邻接点，适合稀疏图。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">EdgeNode</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, adjvex, weight=<span class="code-number">1</span>):</span>',
                '<span class="code-line">        self.adjvex = adjvex</span>',
                '<span class="code-line">        self.weight = weight</span>',
                '<span class="code-line">        self.next = <span class="code-keyword">None</span></span>',
                '<span class="code-line"></span>',
                '<span class="code-line"><span class="code-keyword">class</span> <span class="code-function">AdjList</span>:</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">__init__</span>(self, n):</span>',
                '<span class="code-line">        self.vertices = [None]*n</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 5;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `创建 ${n} 个顶点的邻接表` });
                
                for (let i = 0; i < n; i++) {
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 1, message: `顶点 ${i}: 邻接点 ` + 
                        (arr.slice(0, i).map((v, idx) => idx).join(', ') || '无') });
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 2, message: '邻接表构建完成' });
                return steps;
            }
        },
        {
            id: 'prim',
            name: 'Prim(普里姆)算法',
            nameEn: "Prim's Algorithm",
            desc: '生成最小生成树的贪心算法',
            complexity: { best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(n)' },
            theory: `
                <div class="theory-section">
                    <h3>Prim算法</h3>
                    <p>从任意顶点开始，每次选择连接已选集合和未选集合的最小边，直到所有顶点都被选中。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">prim</span>(graph, n):</span>',
                '<span class="code-line">    INF = <span class="code-function">float</span>(<span class="code-string">"inf"</span>)</span>',
                '<span class="code-line">    lowcost = [INF]*n</span>',
                '<span class="code-line">    visited = [<span class="code-keyword">False</span>]*n</span>',
                '<span class="code-line">    lowcost[<span class="code-number">0</span>] = <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">        k = -<span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> <span class="code-keyword">not</span> visited[i] <span class="code-keyword">and</span> (k==-<span class="code-number">1</span> <span class="code-keyword">or</span> lowcost[i]<lowcost[k]):</span>',
                '<span class="code-line">                k = i</span>',
                '<span class="code-line">        visited[k] = <span class="code-keyword">True</span></span>',
                '<span class="code-line">        <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> <span class="code-keyword">not</span> visited[j] <span class="code-keyword">and</span> graph[k][j] < lowcost[j]:</span>',
                '<span class="code-line">                lowcost[j] = graph[k][j]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 5;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `Prim算法, n=${n}` });
                
                let visited = [true, false, false, false, false];
                steps.push({ type: 'visit', indices: [0], array: [...arr], line: 1, message: `选择顶点 0` });
                
                for (let i = 1; i < n; i++) {
                    steps.push({ type: 'loop-start', array: [...arr], line: 2, message: `第 ${i} 步` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: `选择最小边` });
                    visited[i] = true;
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 4, message: `加入顶点 ${i}` });
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 5, message: '最小生成树完成' });
                return steps;
            }
        },
        {
            id: 'kruskal',
            name: 'Kruskal(克鲁斯卡尔)算法',
            nameEn: "Kruskal's Algorithm",
            desc: '按边权重排序，贪心选择最小边',
            complexity: { best: 'O(E log E)', avg: 'O(E log E)', worst: 'O(E log E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>Kruskal算法</h3>
                    <p>将所有边按权重排序，依次选择不会形成环的最小边，直到有V-1条边。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">kruskal</span>(edges, n):</span>',
                '<span class="code-line">    edges.sort(key=<span class="code-keyword">lambda</span> x: x[<span class="code-number">2</span>])</span>',
                '<span class="code-line">    parent = <span class="code-function">list</span>(<span class="code-function">range</span>(n))</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">find</span>(x):</span>',
                '<span class="code-line">        <span class="code-keyword">return</span> x <span class="code-keyword">if</span> parent[x]==x <span class="code-keyword">else</span> parent[x]=<span class="code-function">find</span>(parent[x])</span>',
                '<span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">union</span>(x, y):</span>',
                '<span class="code-line">        fx, fy = <span class="code-function">find</span>(x), <span class="code-function">find</span>(y)</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> fx != fy:</span>',
                '<span class="code-line">            parent[fx] = fy</span>',
                '<span class="code-line">            <span class="code-keyword">return</span> <span class="code-keyword">True</span></span>',
                '<span class="code-line">        <span class="code-keyword">return</span> <span class="code-keyword">False</span></span>',
                '<span class="code-line">    mst = []</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> u, v, w <span class="code-keyword">in</span> edges:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> <span class="code-function">union</span>(u, v):</span>',
                '<span class="code-line">            mst.append((u, v, w))</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> mst</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const edges = [[0,1,3],[0,2,5],[1,2,4],[1,3,6],[2,3,2],[2,4,4],[3,4,7]];
                steps.push({ type: 'init', array: [...arr], line: 0, message: '边按权重排序' });
                
                edges.slice(0, 5).forEach((edge, i) => {
                    steps.push({ type: 'visit', array: [...arr], line: 1, message: `边 ${edge[0]}-${edge[1]}, 权重=${edge[2]}` });
                    steps.push({ type: 'code-line', array: [...arr], line: 2, message: `检查是否成环` });
                    steps.push({ type: 'code-line', array: [...arr], line: 3, message: i < 4 ? '加入MST' : '跳过(成环)' });
                });
                
                steps.push({ type: 'complete', array: [...arr], line: 4, message: '最小生成树完成' });
                return steps;
            }
        },
        {
            id: 'dijkstra',
            name: 'Dijkstra(迪杰斯特拉)算法',
            nameEn: "Dijkstra's Algorithm",
            desc: '单源最短路径，适用于非负权重图',
            complexity: { best: 'O(V²)', avg: 'O(V²)', worst: 'O(V²)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>Dijkstra算法</h3>
                    <p>从源点开始，每次选择距离最短且未访问的顶点，更新其邻居的距离。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">dijkstra</span>(graph, src, n):</span>',
                '<span class="code-line">    dist = [<span class="code-function">float</span>(<span class="code-string">"inf"</span>)]*n</span>',
                '<span class="code-line">    visited = [<span class="code-keyword">False</span>]*n</span>',
                '<span class="code-line">    dist[src] = <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">        u = -<span class="code-number">1</span></span>',
                '<span class="code-line">        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> <span class="code-keyword">not</span> visited[i] <span class="code-keyword">and</span> (u==-<span class="code-number">1</span> <span class="code-keyword">or</span> dist[i]<dist[u]):</span>',
                '<span class="code-line">                u = i</span>',
                '<span class="code-line">        visited[u] = <span class="code-keyword">True</span></span>',
                '<span class="code-line">        <span class="code-keyword">for</span> v <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> <span class="code-keyword">not</span> visited[v] <span class="code-keyword">and</span> graph[u][v] < dist[u] + graph[u][v]:</span>',
                '<span class="code-line">                dist[v] = dist[u] + graph[u][v]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 5;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `从顶点 0 开始` });
                
                for (let i = 0; i < n; i++) {
                    steps.push({ type: 'loop-start', array: [...arr], line: 1, message: `选择最短距离顶点` });
                    steps.push({ type: 'visit', indices: [i], array: [...arr], line: 2, message: `更新邻居距离` });
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 3, message: '最短路径完成' });
                return steps;
            }
        },
        {
            id: 'floyd',
            name: 'Floyd(弗洛伊德)算法',
            nameEn: 'Floyd-Warshall Algorithm',
            desc: '多源最短路径，动态规划',
            complexity: { best: 'O(V³)', avg: 'O(V³)', worst: 'O(V³)', space: 'O(V²)' },
            theory: `
                <div class="theory-section">
                    <h3>Floyd算法</h3>
                    <p>通过动态规划，逐步尝试通过每个顶点作为中转来缩短路径。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">floyd</span>(graph, n):</span>',
                '<span class="code-line">    dist = [row[:] <span class="code-keyword">for</span> row <span class="code-keyword">in</span> graph]</span>',
                '<span class="code-line">    <span class="code-keyword">for</span> k <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> i <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">            <span class="code-keyword">for</span> j <span class="code-keyword">in</span> <span class="code-function">range</span>(n):</span>',
                '<span class="code-line">                <span class="code-keyword">if</span> dist[i][j] > dist[i][k] + dist[k][j]:</span>',
                '<span class="code-line">                    dist[i][j] = dist[i][k] + dist[k][j]</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> dist</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 4;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `Floyd算法, ${n}×${n}` });
                
                for (let k = 0; k < n; k++) {
                    steps.push({ type: 'loop-start', array: [...arr], line: 1, message: `中转点 k=${k}` });
                    for (let i = 0; i < n; i++) {
                        for (let j = 0; j < n; j++) {
                            if (i !== j && i !== k && j !== k) {
                                steps.push({ type: 'compare', indices: [i, j], array: [...arr], line: 2, message: `dist[${i}][${j}] 经过 k=${k}` });
                            }
                        }
                    }
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 3, message: 'Floyd完成' });
                return steps;
            }
        },
        {
            id: 'bellman-ford',
            name: 'BellmanFord(贝尔曼福特)',
            nameEn: 'Bellman-Ford Algorithm',
            desc: '单源最短路径，可处理负权重',
            complexity: { best: 'O(VE)', avg: 'O(VE)', worst: 'O(VE)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>Bellman-Ford算法</h3>
                    <p>对所有边进行V-1次松弛操作，可以检测负权环。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">bellman_ford</span>(edges, n, src):</span>',
                '<span class="code-line">    dist = [<span class="code-function">float</span>(<span class="code-string">"inf"</span>)]*n</span>',
                '<span class="code-line">    dist[src] = <span class="code-number">0</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> _ <span class="code-keyword">in</span> <span class="code-function">range</span>(n-<span class="code-number">1</span>):</span>',
                '<span class="code-line">        <span class="code-keyword">for</span> u, v, w <span class="code-keyword">in</span> edges:</span>',
                '<span class="code-line">            <span class="code-keyword">if</span> dist[u] + w < dist[v]:</span>',
                '<span class="code-line">                dist[v] = dist[u] + w</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> dist</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 5;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `Bellman-Ford, ${n} 个顶点` });
                
                for (let i = 1; i < n; i++) {
                    steps.push({ type: 'loop-start', array: [...arr], line: 1, message: `第 ${i} 轮松弛` });
                    for (let j = 0; j < Math.min(3, n); j++) {
                        steps.push({ type: 'code-line', array: [...arr], line: 2, message: `检查边 (${j}, ${j+1})` });
                    }
                }
                
                steps.push({ type: 'complete', array: [...arr], line: 3, message: 'Bellman-Ford完成' });
                return steps;
            }
        },
        {
            id: 'critical-path',
            name: '关键路径',
            nameEn: 'Critical Path Method',
            desc: '求AOE网的关键路径和关键活动',
            complexity: { best: 'O(V+E)', avg: 'O(V+E)', worst: 'O(V+E)', space: 'O(V)' },
            theory: `
                <div class="theory-section">
                    <h3>关键路径</h3>
                    <p>在AOE网中，从起点到终点的最长路径称为关键路径，其上的活动称为关键活动。</p>
                </div>
            `,
            python: [
                '<span class="code-line"><span class="code-keyword">def</span> <span class="code-function">critical_path</span>(n, edges):</span>',
                '<span class="code-line">    <span class="code-comment"># ve: 最早开始时间, vl: 最迟开始时间</span></span>',
                '<span class="code-line">    ve = [<span class="code-number">0</span>]*n</span>',
                '<span class="code-line">    vl = [<span class="code-function">float</span>(<span class="code-string">"inf"</span>)]*n</span>',
                '<span class="code-line">    vl[n-<span class="code-number">1</span>] = ve[n-<span class="code-number">1</span>]</span>',
                '<span class="code-line">    <span class="code-comment"># 拓扑排序求ve</span></span>',
                '<span class="code-line">    <span class="code-comment"># 逆拓扑排序求vl</span></span>',
                '<span class="code-line">    <span class="code-keyword">for</span> u, v, w <span class="code-keyword">in</span> edges:</span>',
                '<span class="code-line">        <span class="code-keyword">if</span> ve[u] + w > ve[v]:</span>',
                '<span class="code-line">            ve[v] = ve[u] + w</span>',
                '<span class="code-line">    <span class="code-keyword">return</span> [(u,v) <span class="code-keyword">for</span> u,v,w <span class="code-keyword">in</span> edges <span class="code-keyword">if</span> ve[u]==vl[v]-w]</span>'
            ],
            generateSteps: (arr) => {
                const steps = [];
                const n = 6;
                steps.push({ type: 'init', array: [...arr], line: 0, message: `AOE网, ${n} 个事件` });
                
                steps.push({ type: 'loop-start', array: [...arr], line: 1, message: '拓扑排序' });
                steps.push({ type: 'code-line', array: [...arr], line: 2, message: '求各事件最早发生时间 ve' });
                
                steps.push({ type: 'loop-start', array: [...arr], line: 3, message: '逆拓扑排序' });
                steps.push({ type: 'code-line', array: [...arr], line: 4, message: '求各事件最迟发生时间 vl' });
                
                steps.push({ type: 'code-line', array: [...arr], line: 5, message: '计算各活动最早/最迟开始时间' });
                steps.push({ type: 'complete', array: [...arr], line: 6, message: '关键路径完成' });
                return steps;
            }
        }
    ]
};

// ===== 全局状态 =====
let state = {
    currentCategory: 'sorting',
    currentAlgorithm: null,
    array: [],
    steps: [],
    currentStep: 0,
    isPlaying: false,
    speed: 1,
    animationTimer: null
};

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initAlgoTabs();
    initVizControls();
    renderAlgorithmList('sorting');
});

// ===== 主题切换 =====
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    document.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== 顶部算法标签切换 =====
function initAlgoTabs() {
    document.querySelectorAll('.algo-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.algo-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.category;
            state.currentCategory = category;
            state.currentAlgorithm = null;
            document.getElementById('currentAlgoName').textContent = '选择算法';
            renderAlgorithmList(category);
            showPlaceholder();
        });
    });
}

// ===== 渲染算法列表 =====
function renderAlgorithmList(category) {
    const list = document.getElementById('algorithmList');
    const algos = algorithms[category] || [];
    
    const icons = {
        sorting: '📊',
        searching: '🔍',
        linear: '📋',
        'stack-queue': '📚',
        tree: '🌳',
        graph: '🔀',
        array: '🔢',
        string: '✏️'
    };
    
    list.innerHTML = algos.map(algo => 
        '<div class="algorithm-item ' + (state.currentAlgorithm && state.currentAlgorithm.id === algo.id ? 'active' : '') + '" data-id="' + algo.id + '">' +
            '<span class="algorithm-item-icon">' + (icons[category] || '📊') + '</span>' +
            '<div class="algorithm-item-info">' +
                '<div class="algorithm-item-name">' + algo.name + '</div>' +
                '<div class="algorithm-item-complexity">' + algo.complexity.avg + '</div>' +
            '</div>' +
        '</div>'
    ).join('');
    
    list.querySelectorAll('.algorithm-item').forEach(item => {
        item.addEventListener('click', () => {
            const algo = algos.find(a => a.id === item.dataset.id);
            if (algo) selectAlgorithm(algo);
        });
    });
}

// ===== 选择算法 =====
function selectAlgorithm(algo) {
    state.currentAlgorithm = algo;
    state.currentVariant = algo.variants ? algo.variants[0].id : null;
    state.array = generateRandomArray(8);
    state.steps = [];
    state.currentStep = 0;
    state.isPlaying = false;
    if (state.animationTimer) clearInterval(state.animationTimer);
    
    // 重置所有动画状态
    prevStackArr = [];
    prevQueueArr = [];
    prevBracketArr = [];
    
    document.querySelectorAll('.algorithm-item').forEach(item => {
        item.classList.toggle('active', item.dataset.id === algo.id);
    });
    
    document.getElementById('currentAlgoName').textContent = algo.name;
    
    // 渲染变体切换Tab
    renderVariantTabs(algo);
    
    // 渲染Python代码
    renderPythonCode();
    
    // 生成步骤并自动执行到最后
    generateSteps();
    state.currentStep = state.steps.length - 1;
    
    updateStepInfo();
    renderVisualization();
    highlightPythonCode();
    initProcessList();
}

// ===== 渲染变体切换Tab =====
function renderVariantTabs(algo) {
    const variantTabs = document.getElementById('variantTabs');
    if (algo.variants && algo.variants.length > 1) {
        variantTabs.style.display = 'flex';
        variantTabs.innerHTML = algo.variants.map(v => 
            `<button class="variant-tab ${v.id === state.currentVariant ? 'active' : ''}" data-variant="${v.id}">${v.name}</button>`
        ).join('');
        
        variantTabs.querySelectorAll('.variant-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                state.currentVariant = tab.dataset.variant;
                variantTabs.querySelectorAll('.variant-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                // 停止播放
                state.isPlaying = false;
                if (state.animationTimer) clearInterval(state.animationTimer);
                const btn = document.getElementById('btnStart');
                btn.innerHTML = '<span>▶</span> 开始';
                btn.classList.remove('primary');
                // 重置到开始
                renderPythonCode();
                generateSteps();
                state.currentStep = 0;
                updateStepInfo();
                renderVisualization();
                highlightPythonCode();
            });
        });
    } else {
        variantTabs.style.display = 'none';
    }
}

// ===== 渲染Python代码 =====
function renderPythonCode() {
    const algo = state.currentAlgorithm;
    const variantId = state.currentVariant;
    
    let pythonCode = algo.python;
    
    // 如果有变体且选择了变体，获取变体的代码
    if (algo.variants && variantId) {
        const variant = algo.variants.find(v => v.id === variantId);
        if (variant) {
            pythonCode = variant.python || algo.python;
        }
    }
    
    let pythonHtml = '';
    let lines = [];
    
    if (Array.isArray(pythonCode)) {
        lines = pythonCode;
    } else if (typeof pythonCode === 'string') {
        // 处理字符串格式，按换行符分割
        lines = pythonCode.split('\n');
    }
    
    // 为每个代码行添加包装器（包含指示针）
    pythonHtml = lines.map((line, idx) => {
        const lineNum = idx + 1;
        return `<div class="code-line-wrapper" data-line-num="${lineNum}"><span class="line-marker"></span>${line}</div>`;
    }).join('\n');
    
    document.querySelector('#codeContent .code-block').innerHTML = '<code>' + pythonHtml + '</code>';
}

// ===== 生成随机数组 =====
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 80) + 20);
}

// ===== Python代码高亮 =====
function highlightPythonCode() {
    const codeBlock = document.querySelector('#codeContent .code-block');
    if (!codeBlock || !state.currentAlgorithm) return;
    
    // 清除所有高亮
    codeBlock.querySelectorAll('.code-line-wrapper').forEach(wrapper => {
        wrapper.classList.remove('current', 'highlight-compare', 'highlight-swap', 'highlight-loop');
    });
    
    // 获取当前步骤
    if (state.steps.length === 0 || state.currentStep >= state.steps.length) return;
    
    const step = state.steps[state.currentStep];
    if (step.line === undefined && step.line === null) return;
    
    // 高亮对应行（通过包装器）
    const targetLine = step.line;
    codeBlock.querySelectorAll('.code-line-wrapper').forEach(wrapper => {
        const lineNum = parseInt(wrapper.getAttribute('data-line-num'));
        if (lineNum === targetLine) {
            wrapper.classList.add('current');
            // 根据步骤类型添加额外样式
            if (step.type === 'compare' || step.type === 'check') {
                wrapper.classList.add('highlight-compare');
            } else if (step.type === 'swap' || step.type === 'swap-start') {
                wrapper.classList.add('highlight-swap');
            } else if (step.type === 'loop-start' || step.type === 'loop-end') {
                wrapper.classList.add('highlight-loop');
            }
        }
    });
    
    // 滚动到当前行（如果需要）
    const currentWrapper = codeBlock.querySelector('.code-line-wrapper.current');
    if (currentWrapper) {
        currentWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // 滚动到高亮行
    const highlightedLine = codeBlock.querySelector('.code-line.highlight');
    if (highlightedLine) {
        highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ===== 可视化控制 =====
function initVizControls() {
    document.getElementById('btnStart').addEventListener('click', togglePlay);
    document.getElementById('btnStepBack').addEventListener('click', stepBackward);
    document.getElementById('btnStep').addEventListener('click', stepForward);
    document.getElementById('btnReset').addEventListener('click', resetAnimation);
    document.getElementById('btnRandom').addEventListener('click', randomize);
    document.getElementById('btnApply').addEventListener('click', applyCustomInput);
    document.getElementById('speedSlider').addEventListener('input', updateSpeed);
    document.getElementById('btnClearProcess').addEventListener('click', clearProcessList);
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
        if (e.code === 'ArrowRight') stepForward();
        if (e.code === 'ArrowLeft') stepBackward();
        if (e.code === 'KeyR') resetAnimation();
    });
}


function togglePlay() {
    if (!state.currentAlgorithm) return;
    if (state.steps.length === 0) generateSteps();
    
    // 如果已经到最后一步，先重置到开始
    if (state.currentStep >= state.steps.length - 1) {
        state.currentStep = 0;
        renderVisualization();
        updateStepInfo();
        highlightPythonCode();
    }
    
    state.isPlaying = !state.isPlaying;
    const btn = document.getElementById('btnStart');
    
    if (state.isPlaying) {
        btn.innerHTML = '<span>⏸</span> 暂停';
        btn.classList.add('primary');
        playAnimation();
    } else {
        btn.innerHTML = '<span>▶</span> 开始';
        btn.classList.remove('primary');
        if (state.animationTimer) clearInterval(state.animationTimer);
    }
}

function playAnimation() {
    if (state.animationTimer) clearInterval(state.animationTimer);
    const interval = 1000 / state.speed;
    state.animationTimer = setInterval(() => {
        if (state.currentStep < state.steps.length - 1) {
            state.currentStep++;
            renderVisualization();
            updateStepInfo();
            highlightPythonCode();
        } else {
            togglePlay();
        }
    }, interval);
}

function stepForward() {
    if (!state.currentAlgorithm) return;
    if (state.steps.length === 0) generateSteps();
    // 如果已经到最后一步，先重置到开始
    if (state.currentStep >= state.steps.length - 1) {
        state.currentStep = 0;
        renderVisualization();
        updateStepInfo();
        highlightPythonCode();
        return;
    }
    state.currentStep++;
    renderVisualization();
    updateStepInfo();
    highlightPythonCode();
}

function stepBackward() {
    if (!state.currentAlgorithm || state.steps.length === 0) return;
    if (state.currentStep > 0) {
        state.currentStep--;
        renderVisualization();
        updateStepInfo();
        highlightPythonCode();
    }
}

function resetAnimation() {
    state.currentStep = 0;
    state.isPlaying = false;
    if (state.animationTimer) clearInterval(state.animationTimer);
    // 重置动画状态
    prevStackArr = [];
    prevQueueArr = [];
    prevBracketArr = [];
    const btn = document.getElementById('btnStart');
    btn.innerHTML = '<span>▶</span> 开始';
    btn.classList.remove('primary');
    renderVisualization();
    updateStepInfo();
    highlightPythonCode();
}

function randomize() {
    if (!state.currentAlgorithm) return;
    state.array = generateRandomArray(8);
    state.steps = [];
    state.currentStep = 0;
    state.isPlaying = false;
    if (state.animationTimer) clearInterval(state.animationTimer);
    // 重置动画状态
    prevStackArr = [];
    prevQueueArr = [];
    prevBracketArr = [];
    const btn = document.getElementById('btnStart');
    btn.innerHTML = '<span>▶</span> 开始';
    btn.classList.remove('primary');
    generateSteps();
    initProcessList();
    renderVisualization();
    updateStepInfo();
    highlightPythonCode();
}

function applyCustomInput() {
    if (!state.currentAlgorithm) return;
    const input = document.getElementById('customInput').value;
    const nums = input.split(/[,\s]+/).map(s => parseInt(s)).filter(n => !isNaN(n) && n > 0 && n <= 100);
    if (nums.length > 0 && nums.length <= 12) {
        state.array = nums;
        state.steps = [];
        state.currentStep = 0;
        state.isPlaying = false;
        if (state.animationTimer) clearInterval(state.animationTimer);
        // 重置动画状态
        prevStackArr = [];
        prevQueueArr = [];
        prevBracketArr = [];
        const btn = document.getElementById('btnStart');
        btn.innerHTML = '<span>▶</span> 开始';
        btn.classList.remove('primary');
        generateSteps();
        initProcessList();
        renderVisualization();
        updateStepInfo();
        highlightPythonCode();
    }
}

function updateSpeed() {
    state.speed = parseFloat(document.getElementById('speedSlider').value);
    document.getElementById('speedValue').textContent = state.speed + 'x';
    if (state.isPlaying) playAnimation();
}

function updateStepInfo() {
    const info = document.getElementById('stepInfo');
    const progress = document.getElementById('progressFill');
    const infoValue = document.getElementById('infoValue');
    const infoI = document.getElementById('infoI');
    const infoJ = document.getElementById('infoJ');
    const infoCompare = document.getElementById('infoCompare');
    const infoSwap = document.getElementById('infoSwap');
    
    if (state.steps.length > 0) {
        info.textContent = `${state.currentStep + 1} / ${state.steps.length}`;
        progress.style.width = ((state.currentStep + 1) / state.steps.length * 100) + '%';
        const step = state.steps[state.currentStep];
        infoValue.textContent = getStepTypeName(step.type);
        
        // 从message中提取i, j等信息
        const message = step.message || '';
        infoCompare.textContent = step.type === 'compare' ? '是' : '-';
        infoSwap.textContent = (step.type === 'swap' || step.type === 'swap-start') ? '是' : '-';
        
        // 尝试提取i和j的值
        const iMatch = message.match(/i\s*=\s*(\d+)/);
        const jMatch = message.match(/j\s*=\s*(\d+)/);
        infoI.textContent = iMatch ? iMatch[1] : '-';
        infoJ.textContent = jMatch ? jMatch[1] : '-';
    } else {
        info.textContent = '0 / 0';
        progress.style.width = '0%';
        infoValue.textContent = '--';
        infoI.textContent = '-';
        infoJ.textContent = '-';
        infoCompare.textContent = '-';
        infoSwap.textContent = '-';
    }
    updateProcessListActive();
}

function getStepTypeName(type) {
    const names = {
        'init': '初始化',
        'start': '开始',
        'compare': '比较',
        'swap': '交换',
        'swap-start': '准备交换',
        'visit': '访问',
        'enqueue': '入队',
        'dequeue': '出队',
        'push': '入栈',
        'pop': '出栈',
        'loop-start': '循环',
        'loop-end': '循环结束',
        'insert': '插入',
        'shift': '移位',
        'sorted': '已排序',
        'found': '找到',
        'check': '检查',
        'complete': '完成',
        'update': '更新'
    };
    return names[type] || '执行';
}

function generateSteps() {
    if (!state.currentAlgorithm) return;
    const algo = state.currentAlgorithm;
    if (algo.generateSteps) {
        state.steps = algo.generateSteps(state.array);
        state.currentStep = 0;
        initProcessList();
    }
}

// ===== 过程记录 =====
function initProcessList() {
    const processList = document.getElementById('processList');
    processList.innerHTML = '';
    
    if (state.steps.length === 0) {
        processList.innerHTML = '<div class="process-empty">选择一个算法查看执行过程</div>';
        return;
    }
    
    state.steps.forEach((step, index) => {
        const item = document.createElement('div');
        item.className = 'process-item';
        item.dataset.step = index;
        
        const typeClass = getStepTypeClass(step.type);
        const typeLabel = getStepTypeLabel(step.type);
        
        item.innerHTML = `
            <span class="process-step-num">${index + 1}</span>
            <span class="process-step-content">
                ${escapeHtml(step.message || '...')}
                <span class="process-step-type ${typeClass}">${typeLabel}</span>
            </span>
        `;
        
        item.addEventListener('click', () => {
            state.currentStep = index;
            renderVisualization();
            updateStepInfo();
            highlightPythonCode();
        });
        
        processList.appendChild(item);
    });
    
    updateProcessListActive();
}

function updateProcessListActive() {
    const items = document.querySelectorAll('.process-item');
    items.forEach((item, index) => {
        item.classList.remove('active', 'current');
        if (index === state.currentStep) {
            item.classList.add('current');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else if (index < state.currentStep) {
            item.classList.add('active');
        }
    });
}

function getStepTypeClass(type) {
    const typeMap = {
        'compare': 'type-compare',
        'swap': 'type-swap',
        'swap-start': 'type-swap',
        'visit': 'type-visit',
        'enqueue': 'type-visit',
        'dequeue': 'type-visit',
        'push': 'type-visit',
        'pop': 'type-visit',
        'loop-start': 'type-loop',
        'loop-end': 'type-loop',
        'complete': 'type-complete'
    };
    return typeMap[type] || 'type-default';
}

function getStepTypeLabel(type) {
    const labelMap = {
        'init': '初始化',
        'start': '开始',
        'compare': '比较',
        'swap': '交换',
        'swap-start': '准备交换',
        'visit': '访问',
        'enqueue': '入队',
        'dequeue': '出队',
        'push': '入栈',
        'pop': '出栈',
        'loop-start': '循环',
        'loop-end': '循环结束',
        'insert': '插入',
        'shift': '移位',
        'sorted': '已排序',
        'found': '找到',
        'check': '检查',
        'complete': '完成',
        'update': '更新',
        'code-line': '执行'
    };
    return labelMap[type] || '步骤';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function clearProcessList() {
    state.steps = [];
    state.currentStep = 0;
    const processList = document.getElementById('processList');
    processList.innerHTML = '<div class="process-empty">选择一个算法查看执行过程</div>';
    renderVisualization();
    updateStepInfo();
    highlightPythonCode();
}

// ===== 渲染可视化 =====
function renderVisualization() {
    const canvas = document.getElementById('vizCanvas');
    if (!state.currentAlgorithm) {
        canvas.innerHTML = '<div class="placeholder-message"><div class="placeholder-icon">🎬</div><p>选择一个算法开始可视化演示</p></div>';
        return;
    }
    
    if (state.steps.length === 0) {
        renderArrayVisualization(state.array);
    } else {
        const step = state.steps[state.currentStep];
        renderStepVisualization(step);
    }
}

function renderStepVisualization(step) {
    const algo = state.currentAlgorithm;
    if (algo.id && algo.id.startsWith('ll-')) {
        renderLinkedListVisualization(step);
    } else if (algo.id && (algo.id.includes('tree') || algo.id.includes('bst'))) {
        renderTreeVisualization(step);
    } else if (algo.id && (algo.id.includes('bfs') || algo.id.includes('dfs'))) {
        renderGraphVisualization(step);
    } else if (algo.id && algo.id.includes('bracket')) {
        renderBracketMatchVisualization(step);
    } else if (algo.id && (algo.id.includes('栈') || algo.id.includes('stack'))) {
        renderStackVisualization(step);
    } else if (algo.id && (algo.id.includes('队列') || algo.id.includes('queue'))) {
        renderQueueVisualization(step);
    } else {
        renderArrayVisualizationWithStep(step);
    }
}

function renderArrayVisualization(arr) {
    const canvas = document.getElementById('vizCanvas');
    const max = Math.max(...arr);
    const container = document.createElement('div');
    container.className = 'array-container';
    
    arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar draggable';
        bar.dataset.idx = idx;
        const height = Math.max(30, (val / max) * 200);
        bar.innerHTML = '<div class="array-bar-value">' + val + '</div>' +
            '<div class="array-bar-inner" style="height: ' + height + 'px"></div>' +
            '<div class="array-bar-index">[' + idx + ']</div>';
        container.appendChild(bar);
    });
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderArrayVisualizationWithStep(step) {
    const canvas = document.getElementById('vizCanvas');
    const arr = step.array;
    const max = Math.max(...arr);
    const container = document.createElement('div');
    container.className = 'array-container';
    
    arr.forEach((val, idx) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar draggable';
        bar.dataset.idx = idx;
        
        if (step.type === 'compare' && step.indices && step.indices.includes(idx)) {
            bar.classList.add('comparing');
        } else if (step.type === 'swap' && step.indices && step.indices.includes(idx)) {
            bar.classList.add('swapping');
        } else if (step.type === 'pivot' && step.index === idx) {
            bar.classList.add('pivot');
        } else if (step.type === 'found' && step.index === idx) {
            bar.classList.add('found');
        } else if (step.type === 'check' && step.index === idx) {
            bar.classList.add('current');
        } else if (step.type === 'sorted' && step.index <= idx) {
            bar.classList.add('sorted');
        } else if (step.type === 'complete') {
            bar.classList.add('sorted');
        }
        
        const height = Math.max(30, (val / max) * 200);
        bar.innerHTML = '<div class="array-bar-value">' + val + '</div>' +
            '<div class="array-bar-inner" style="height: ' + height + 'px"></div>' +
            '<div class="array-bar-index">[' + idx + ']</div>';
        container.appendChild(bar);
    });
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

// ===== 栈可视化 =====
let prevStackArr = [];

function renderStackVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const arr = step.array || [];
    const container = document.createElement('div');
    container.className = 'stack-container';
    
    const topIndex = step.top !== undefined ? step.top : arr.length - 1;
    
    // 检测入栈出栈
    const isPush = arr.length > prevStackArr.length;
    const isPop = arr.length < prevStackArr.length;
    
    arr.forEach((val, idx) => {
        const item = document.createElement('div');
        item.className = 'stack-item draggable';
        item.dataset.idx = idx;
        
        if (idx === topIndex) {
            item.classList.add('top');
        }
        if (step.type === 'visit' && step.indices && step.indices.includes(idx)) {
            item.classList.add('current');
        }
        // 新入栈元素添加动画
        if (isPush && idx === arr.length - 1) {
            item.classList.add('push');
        }
        
        item.textContent = val;
        container.appendChild(item);
    });
    
    // 出栈动画 - 在栈上方显示被弹出的元素
    if (isPop && prevStackArr.length > 0) {
        const poppingVal = prevStackArr[prevStackArr.length - 1];
        const poppingItem = document.createElement('div');
        poppingItem.className = 'stack-item pop draggable';
        poppingItem.textContent = poppingVal;
        poppingItem.style.position = 'absolute';
        poppingItem.style.left = '0';
        poppingItem.style.top = '0';
        container.insertBefore(poppingItem, container.firstChild);
        
        setTimeout(() => {
            poppingItem.remove();
        }, 300);
    }
    
    if (arr.length > 0) {
        const base = document.createElement('div');
        base.className = 'stack-base';
        container.appendChild(base);
        
        const pointer = document.createElement('div');
        pointer.className = 'stack-pointer';
        pointer.textContent = '↑top';
        base.appendChild(pointer);
    }
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
    prevStackArr = [...arr];
}

// ===== 括号匹配可视化 =====
let prevBracketArr = [];

function renderBracketMatchVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const arr = step.array || [];
    const container = document.createElement('div');
    container.className = 'bracket-container';
    
    const topIndex = step.top !== undefined ? step.top : arr.length - 1;
    
    // 检测是入栈还是出栈
    const isPush = arr.length > prevBracketArr.length;
    const isPop = arr.length < prevBracketArr.length;
    
    arr.forEach((val, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'bracket-wrapper';
        
        const item = document.createElement('div');
        item.className = 'bracket-item draggable';
        item.dataset.idx = idx;
        
        if (idx === topIndex) {
            item.classList.add('top');
        }
        if (step.type === 'visit' && step.indices && step.indices.includes(idx)) {
            item.classList.add('current');
        }
        if (step.type === 'compare') {
            item.classList.add('comparing');
        }
        if (step.type === 'pop') {
            item.classList.add('matched');
        }
        if (step.type === 'complete') {
            item.classList.add(step.message && step.message.includes('失败') ? 'failed' : 'success');
        }
        
        item.textContent = val;
        wrapper.appendChild(item);
        
        container.appendChild(wrapper);
        
        if (idx < arr.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'bracket-arrow';
            arrow.textContent = '→';
            container.appendChild(arrow);
        }
    });
    
    // 入栈动画
    if (isPush && arr.length > 0) {
        const lastItem = container.querySelector('.bracket-item:last-child');
        if (lastItem) {
            lastItem.classList.add('bracket-push');
        }
    }
    
    // 出栈动画
    if (isPop) {
        const firstWrapper = container.querySelector('.bracket-wrapper');
        if (firstWrapper) {
            const popItem = document.createElement('div');
            popItem.className = 'bracket-item bracket-pop draggable';
            popItem.textContent = prevBracketArr[0];
            popItem.style.background = 'linear-gradient(135deg, #fca5a5, #f87171)';
            popItem.style.borderColor = '#dc2626';
            firstWrapper.insertBefore(popItem, firstWrapper.firstChild);
            
            setTimeout(() => {
                const lastWrapper = container.querySelector('.bracket-wrapper:last-child');
                if (lastWrapper) {
                    lastWrapper.remove();
                    const arrow = container.querySelector('.bracket-arrow:last-child');
                    if (arrow) arrow.remove();
                }
            }, 300);
        }
    }
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
    prevBracketArr = [...arr];
}

// ===== 队列可视化 =====
let prevQueueArr = [];

function renderQueueVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const arr = step.array || [];
    const container = document.createElement('div');
    container.className = 'queue-container';
    
    const headIndex = step.head !== undefined ? step.head : 0;
    const tailIndex = step.tail !== undefined ? step.tail : arr.length - 1;
    
    // 检测入队出队
    const isEnqueue = arr.length > prevQueueArr.length;
    const isDequeue = arr.length < prevQueueArr.length;
    
    arr.forEach((val, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'queue-wrapper';
        
        const item = document.createElement('div');
        item.className = 'queue-item draggable';
        item.dataset.idx = idx;
        
        if (idx === headIndex && arr.length > 0) {
            item.classList.add('head');
        }
        if (idx === tailIndex && arr.length > 0) {
            item.classList.add('tail');
        }
        if (step.type === 'visit' && step.indices && step.indices.includes(idx)) {
            item.classList.add('current');
        }
        // 新入队元素添加动画
        if (isEnqueue && idx === arr.length - 1) {
            item.classList.add('enqueue');
        }
        
        item.textContent = val;
        wrapper.appendChild(item);
        
        const label = document.createElement('div');
        label.className = 'queue-label';
        if (idx === headIndex && arr.length > 0) {
            label.textContent = 'head';
        } else if (idx === tailIndex && arr.length > 0) {
            label.textContent = 'tail';
        }
        wrapper.appendChild(label);
        
        container.appendChild(wrapper);
        
        if (idx < arr.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'queue-arrow';
            arrow.textContent = '→';
            container.appendChild(arrow);
        }
    });
    
    // 出队动画
    if (isDequeue && prevQueueArr.length > 0) {
        const dequeueVal = prevQueueArr[0];
        const dequeueItem = document.createElement('div');
        dequeueItem.className = 'queue-item dequeue draggable';
        dequeueItem.textContent = dequeueVal;
        dequeueItem.style.position = 'absolute';
        dequeueItem.style.left = '0';
        dequeueItem.style.top = '0';
        container.insertBefore(dequeueItem, container.firstChild);
        
        setTimeout(() => {
            dequeueItem.remove();
        }, 300);
    }
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
    prevQueueArr = [...arr];
}

function renderLinkedListVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const container = document.createElement('div');
    container.className = 'linked-list-container';
    
    const list = step.list || [];
    list.forEach((item, idx) => {
        const data = typeof item === 'object' ? item.data : item;
        const nodeEl = document.createElement('div');
        nodeEl.className = 'll-node draggable';
        nodeEl.dataset.idx = idx;
        if (step.type === 'insert' && idx === 0) nodeEl.classList.add('inserting');
        nodeEl.innerHTML = '<div class="ll-node-box"><div class="ll-node-data">' + data + '</div><div class="ll-node-pointer">next</div></div>';
        container.appendChild(nodeEl);
        
        if (idx < list.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'll-arrow';
            container.appendChild(arrow);
        }
    });
    
    const nullEl = document.createElement('div');
    nullEl.className = 'll-null';
    nullEl.textContent = 'NULL';
    container.appendChild(nullEl);
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderTreeVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const container = document.createElement('div');
    container.className = 'tree-container';
    
    const tree = step.tree;
    if (!tree) {
        canvas.innerHTML = '';
        canvas.appendChild(container);
        return;
    }
    
    // 使用节点位置映射，更可靠的方式
    const nodeMap = new Map();  // key: val, value: {x, y, node, hasLeft, hasRight}
    const levelHeight = 70;  // 层级间距
    const baseY = 30;
    const nodeWidth = 50;  // 节点卡片宽度
    const nodeHeight = 36;  // 节点卡片高度
    
    // 第一遍：收集所有节点位置
    function collectNodes(node, level, left, right) {
        if (!node) return;
        const x = (left + right) / 2;
        const y = level * levelHeight + baseY;
        
        const hasLeft = node.left !== null;
        const hasRight = node.right !== null;
        
        nodeMap.set(node.val, { x, y, node, hasLeft, hasRight, level });
        
        collectNodes(node.left, level + 1, left, x);
        collectNodes(node.right, level + 1, x, right);
    }
    
    collectNodes(tree, 0, 0, 600);
    
    // 第二遍：绘制连接线
    function drawEdges(node) {
        if (!node) return;
        
        const parentInfo = nodeMap.get(node.val);
        if (!parentInfo) return;
        
        // 绘制到子节点的连线
        if (node.left) {
            const childInfo = nodeMap.get(node.left.val);
            if (childInfo) {
                drawEdge(parentInfo.x, parentInfo.y, childInfo.x, childInfo.y);
            }
            drawEdges(node.left);
        }
        
        if (node.right) {
            const childInfo = nodeMap.get(node.right.val);
            if (childInfo) {
                drawEdge(parentInfo.x, parentInfo.y, childInfo.x, childInfo.y);
            }
            drawEdges(node.right);
        }
    }
    
    function drawEdge(x1, y1, x2, y2) {
        const edge = document.createElement('div');
        edge.className = 'tree-edge';
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        // 调整起点为节点底部中心
        const startX = x1 + nodeWidth / 2 - 1;
        const startY = y1 + nodeHeight;
        
        edge.style.width = length + 'px';
        edge.style.left = startX + 'px';
        edge.style.top = startY + 'px';
        edge.style.transform = 'rotate(' + angle + 'deg)';
        edge.style.transformOrigin = '0 0';
        
        container.appendChild(edge);
    }
    
    drawEdges(tree);
    
    // 第三遍：绘制节点
    nodeMap.forEach((info, val) => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'tree-node draggable';
        nodeEl.dataset.idx = val;
        
        if (info.level === 0) {
            nodeEl.classList.add('root');
        }
        
        // 判断是否为叶子节点
        if (!info.hasLeft && !info.hasRight && info.level > 0) {
            nodeEl.classList.add('leaf');
        }
        
        // 高亮状态
        if (step.type === 'visit' && step.current === val) {
            nodeEl.classList.add('current');
        } else if (step.visited && step.visited.includes(val)) {
            nodeEl.classList.add('visited');
        }
        
        nodeEl.style.left = info.x + 'px';
        nodeEl.style.top = info.y + 'px';
        nodeEl.textContent = val;
        container.appendChild(nodeEl);
    });
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function renderGraphVisualization(step) {
    const canvas = document.getElementById('vizCanvas');
    const container = document.createElement('div');
    container.className = 'graph-container';
    
    const nodePositions = {
        0: { x: 60, y: 40 }, 1: { x: 180, y: 30 },
        2: { x: 60, y: 150 }, 3: { x: 300, y: 30 },
        4: { x: 180, y: 150 }, 5: { x: 300, y: 150 }
    };
    
    const graph = step.graph || {};
    const edges = new Set();
    Object.keys(graph).forEach(node => {
        graph[node].forEach(neighbor => {
            const key = Math.min(node, neighbor) + '-' + Math.max(node, neighbor);
            if (!edges.has(key)) {
                edges.add(key);
                const pos1 = nodePositions[node];
                const pos2 = nodePositions[neighbor];
                const edge = document.createElement('div');
                edge.className = 'graph-edge';
                const dx = pos2.x - pos1.x;
                const dy = pos2.y - pos1.y;
                const length = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                edge.style.width = length + 'px';
                edge.style.left = (pos1.x + 24) + 'px';
                edge.style.top = (pos1.y + 24) + 'px';
                edge.style.transform = 'rotate(' + angle + 'deg)';
                container.appendChild(edge);
            }
        });
    });
    
    Object.keys(nodePositions).forEach(node => {
        const pos = nodePositions[node];
        const nodeEl = document.createElement('div');
        nodeEl.className = 'graph-node draggable';
        nodeEl.dataset.idx = node;
        if (step.visited && step.visited.includes(parseInt(node))) {
            nodeEl.classList.add('visited');
        }
        if (step.current === parseInt(node)) {
            nodeEl.classList.add('current');
        }
        nodeEl.style.left = pos.x + 'px';
        nodeEl.style.top = pos.y + 'px';
        nodeEl.textContent = node;
        container.appendChild(nodeEl);
    });
    
    if (step.queue || step.stack) {
        const list = step.queue || step.stack;
        const label = step.queue ? '队列' : '栈';
        const queueDisplay = document.createElement('div');
        queueDisplay.style.cssText = 'position:absolute;top:10px;right:10px;background:var(--bg-elevated);padding:0.75rem;border-radius:8px;font-size:0.8rem;';
        queueDisplay.innerHTML = '<strong>' + label + ':</strong> [' + list.join(', ') + ']';
        container.appendChild(queueDisplay);
    }
    
    canvas.innerHTML = '';
    canvas.appendChild(container);
}

function showPlaceholder() {
    document.getElementById('currentAlgoName').textContent = '选择算法';
    document.getElementById('complexityBadges').innerHTML = '';
    document.getElementById('pseudocodeBlock').innerHTML = '<code>请选择一个算法</code>';
    document.getElementById('pythonCode').innerHTML = '<code>请选择一个算法</code>';
    document.getElementById('vizCanvas').innerHTML = '<div class="placeholder-message"><div class="placeholder-icon">🎬</div><p>选择一个算法开始可视化演示</p></div>';
    document.getElementById('stepInfo').innerHTML = '步骤: <span>0</span> / 0';
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('stepText').textContent = '--';
}

function copyCode(elementId) {
    const code = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = '已复制!';
        setTimeout(() => btn.textContent = '复制代码', 2000);
    });
}
