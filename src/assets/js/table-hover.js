// Добавляем обводку сталбца таблицы при наведении на ячейку
const $tableRows = document.querySelectorAll('.table tr');
$tableRows.forEach($tableRow => {
	const $tableCells = $tableRow.querySelectorAll('.table th, .table td');
	$tableCells.forEach(($tableCell, index) => {
		$tableCell.addEventListener('mouseover', function () {
			let n = index + 1;

			const $tableCol = document.querySelectorAll('.table th:nth-child(' + n + '), .table td:nth-child(' + n + ')');
				$tableCol.forEach(($tableColItem) => {
					$tableColItem.classList.add('table-hover');
			});
		});

		$tableCell.addEventListener('mouseout', function () {
			let n = index + 1;

			const $tableCol = document.querySelectorAll('.table th:nth-child(' + n + '), .table td:nth-child(' + n + ')');
			$tableCol.forEach(($tableColItem) => {
				$tableColItem.classList.remove('table-hover');
			});
		});
	});
});